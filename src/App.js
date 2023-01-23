import React, {useState, useEffect} from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ExDetails from './pages/ExDetails'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
    const [baseUrl] = useState("https://waves-upon-waves.herokuapp.com/");
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
          setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
        }
      }, []);
    return (
        <Box width='400px' sx={{ width: { xl: '1488px' }}} m='auto'>
            <Navigation currentUser={currentUser}/>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/exercise/:id' element={<ExDetails />} />
                <Route path="/login" element={<Login setCurrentUser={setCurrentUser} baseUrl={baseUrl} currentUser={currentUser} />} />
                <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} baseUrl={baseUrl} currentUser={currentUser}/>} />

            </Routes>
            <Footer />
        </Box>
    )
}

export default App