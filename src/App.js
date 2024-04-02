import React, {useState, useEffect} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Exercise from './pages/Exercise'
import ExDetails from './pages/ExDetails'
import MyVideos from './pages/MyVideos'
import About from './pages/About'
function App() {

    return (
        <Box width='400px' sx={{ width: { xl: '1488px' }}} m='auto'>
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/gallery' element={<MyVideos />} />
                <Route path='/exercises' element={<Exercise />} />
                <Route path='/exercise/:id' element={<ExDetails />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default App