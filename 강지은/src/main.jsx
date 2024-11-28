import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  CounterPage  from "./CounterPage.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CounterPage /> 
    <App />
   
  </StrictMode>,
  
)
