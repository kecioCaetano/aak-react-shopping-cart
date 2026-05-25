import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CartProvider from './context/CartProvider'

function RouteSwitch() {
  return (
    <BrowserRouter>
      <CartProvider>

      </CartProvider>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>

  </StrictMode>,
)
