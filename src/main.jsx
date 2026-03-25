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
  { path: "/", element: <Home /> },
  { path: "/my-list", element: <MyList /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)