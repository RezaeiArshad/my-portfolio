import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Preloader from './preloader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
  </StrictMode>,
)
