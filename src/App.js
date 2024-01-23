import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HrRoutes from './routes/HrRoutes'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Toaster/>
      <BrowserRouter>
        <HrRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App