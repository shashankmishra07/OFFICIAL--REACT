import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <App />

    </BrowserRouter>
  </StrictMode>,
)


//brouser router se app componentko rap kiya
//isse app pr aane wale sabhi components ko routing ke liye enable krta h
//with the help of router ab pura page reload nnhi hoga 
//jo bhi componend app par render honge wo with the help of url hi render honge
//url create hoga== routes and route
