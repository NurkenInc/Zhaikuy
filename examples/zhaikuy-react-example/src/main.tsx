import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from './app/providers/RouterProvider'

import './app/styles/index.css'

import './shared/lib/config/i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
)
