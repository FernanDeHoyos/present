import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RomanticGiftPage from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RomanticGiftPage />
  </StrictMode>,
)
