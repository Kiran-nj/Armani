import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchAndfilter from './Components/SearchAndfilter.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SellCar from './Components/SellCar.jsx'
import Insurance from './Components/Insurance.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/searchbtn" element={<SearchAndfilter />} />
    <Route path="/sellcar" element={<SellCar />} />
    <Route path="/insurance" element={<Insurance />} />


    {/* Add more routes for other components */}
  </Routes>
</BrowserRouter>

  
  ,
)
