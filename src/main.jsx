import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { ThemeProvider } from './assets/Context/ThemeContext/Themecontext.jsx'
import App from './App.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider> */}
      <App />
    {/* </ThemeProvider> */}
  </StrictMode>,
)
