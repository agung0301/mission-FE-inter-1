import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Swal from 'sweetalert2'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import MyList from './pages/MyList/MyList'

function App() {
  const [myList, setMyList] = useState([]);

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

  const handleToggleFavorite = (id) => {
    setMyList(myList.map((item) => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    }));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          onAdd={(movie) => {
            setMyList((prev) => {
              if (prev.find((m) => m.id === movie.id)) {
                if (window.location.pathname !== '/my-list') {
                  Toast.fire({
                    icon: 'info',
                    title: `${movie.title} Sudah Tersedia Di Daftar Saya`
                  });
                }
                return prev;
              }
              Toast.fire({
                icon: 'success',
                title: `Berhasil Menambahkan ${movie.title} Ke Daftar Saya`
              });
              return [...prev, movie];
            });
          }}
        />
      ),
    },
    {
      path: "/my-list",
      element: (
        <MyList
          data={myList}
          onRemove={(id) => {
            const movieToDelete = myList.find((item) => item.id === id);
            setMyList((prev) => prev.filter((item) => item.id !== id));
            Toast.fire({
              icon: 'warning',
              title: `${movieToDelete?.title || 'Film'} Dihapus Dari Daftar Saya`
            });
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