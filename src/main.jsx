import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { rootRouter } from './router/router.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={rootRouter} />
  </Provider>
)
