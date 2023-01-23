import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navigation = (props) => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '115px', xs: '30px' }, mt: { sm: '22px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '55px', height: '65px', margin: '0px 20px' }} />
    </Link>
    {localStorage.getItem("currentUser") ? (
      <Stack
        direction="row"
        gap="30px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
        <a
          onClick={() => localStorage.removeItem("currentUser")}
          href="/"
          style={{ textDecoration: 'none', color: '#3A1212' }}>Log Out</a>
        </Stack>
        ) : (
          <Stack
          direction="row"
          gap="30px"
          fontFamily="Alegreya"
          fontSize="24px"
          alignItems="flex-end"
        >
          <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
          <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
          <a href="/login" style={{ textDecoration: 'none', color: '#3A1212' }}>Login</a>
          <a href="/signup" style={{ textDecoration: 'none', color: '#3A1212' }}>Signup</a>
        </Stack>
    )}
  </Stack>
);

export default Navigation