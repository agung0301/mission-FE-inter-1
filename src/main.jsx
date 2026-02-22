import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import MyList from './pages/MyList/MyList'

function App() {
  const [myList, setMyList] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          onAdd={(movie) => {
            setMyList((prev) => {
              if (prev.find((m) => m.id === movie.id)) return prev;
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
            setMyList((prev) => prev.filter(item => item.id !== id));
          }}
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