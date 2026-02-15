import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import MyList from './pages/MyList/MyList'

  const router = createBrowserRouter([
  {
    path: "/",      
    element: <Home />, 
  },
  {
    path: "/login",    
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/my-list",
    element: <MyList />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)