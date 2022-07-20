import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import Login from './screens/Auth/Login'
import Categories from './screens/Categories'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="categories" element={<Categories />} />
            <Route path="login" element={<Login />} />
        </Routes>
    </BrowserRouter>
)
