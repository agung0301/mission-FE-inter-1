import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Swal from 'sweetalert2'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import MyList from './pages/MyList/MyList'
import api from './services/api'

function App() {
  const [myList, setMyList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchMyList = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await api.get('/my-list');

        setMyList(response.data);

        console.log("Data dari server berhasil dimuat:", response.data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
        setIsError(true);
      }finally{
        setIsLoading(false);
      }
      
    };

    fetchMyList();
  }, []);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    background: '#141414',
    color: '#fff',
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  const handleToggleFavorite = async (id) => {
    const oldList = [...myList];

    setMyList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item)
    );
    try {
      const movieToUpdate = oldList.find((item) => item.id === id);
      const updatedMovie = { ...movieToUpdate, isFavorite: !movieToUpdate.isFavorite };

      await api.put(`/my-list/${id}`, updatedMovie);
    } catch (error) {
      console.error("Gagal update:", error);
      setMyList(oldList);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          onAdd={async (movie) => {
            try {
              const isExisting = myList.find((m) => m.title === movie.title);
              if (isExisting) {
                Toast.fire({
                  icon: 'info',
                  title: `${movie.title} Sudah Tersedia Di Daftar Saya`
                });
                return;
              }

              const response = await api.post('/my-list', {
                ...movie,
                isFavorite: false
              });

              setMyList((prev) => [...prev, response.data]);

              Toast.fire({
                icon: 'success',
                title: `Berhasil Menambahkan ${movie.title} Ke Daftar Saya`
              });

            } catch (error) {
              console.error('Error adding to My List:', error);
              Toast.fire({
                icon: 'error',
                title: `Gagal Menambahkan ${movie.title} Ke Daftar Saya`
              });
            }
          }}
        />
      ),
    },
    {
      path: "/my-list",
      element: (
        <MyList
          data={myList}
          isLoading={isLoading}
          isError={isError}
          onRemove={async (id) => {
            try {
              const movieToDelete = myList.find((item) => item.id === id);

              await api.delete(`/my-list/${id}`);

              setMyList((prev) => prev.filter((item) => item.id !== id));

              Toast.fire({
                icon: 'warning',
                title: `${movieToDelete?.title || 'Film'} Dihapus Dari Daftar Saya`
              });
            } catch (error) {
              console.error("Gagal hapus:", error);
            }
          }}
          onToggleFavorite={handleToggleFavorite}
        />
      ),
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)