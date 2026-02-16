import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { KokkaiProvider } from './Kokkai/Common/Providers/KokkaiProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <KokkaiProvider>
      <App />
    </KokkaiProvider>
  </StrictMode>,
)
