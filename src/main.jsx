import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { rootRouter } from './router/router.jsx'

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={rootRouter} />
)
