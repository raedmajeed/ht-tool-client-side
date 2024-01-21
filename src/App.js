import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HrRoutes from './routes/HrRoutes'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HrRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App