import './utils/reset.css'
import './utils/colors.css'
import './utils/globals.css'
import './utils/typography.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
