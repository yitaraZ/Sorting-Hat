import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './component/Home.jsx'
import Name from './component/Name.jsx'
import Namelist from './component/Namelist.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/Name",
    element: <Name />
  },
  {
    path: "/Name_list",
    element: <Namelist />
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)