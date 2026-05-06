import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n/config'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

if (typeof window !== 'undefined') {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }
  window.scrollTo(0, 0)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
