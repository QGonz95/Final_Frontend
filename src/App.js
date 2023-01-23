import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ExDetails from './pages/ExDetails'


function App() {
    return (
        <Box width='400px' sx={{ width: { xl: '1488px' }}} m='auto'>
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/exercise/:id' element={<ExDetails />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default App