import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Otp from './page/otp.jsx'
import Drag from './page/drag.jsx'
import Table from './page/table.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Otp />
      },
      {
        path: "/otp-form",
        element: <Otp />
      },
      {
        path: "/course-list",
        element: <Drag />
      },
      {
        path: "/batches",
        element: <Table />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
