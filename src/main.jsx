import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { rootRouter } from './router/router.jsx'
import CartProvider from './contexts/Cart.jsx'

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <CartProvider>
    <RouterProvider router={rootRouter} />
  </CartProvider>
)
