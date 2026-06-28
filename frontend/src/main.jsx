import './style.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './containers/Home'
import Register from './containers/Register'
import Login from './containers/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Register />
  </StrictMode>,
)
