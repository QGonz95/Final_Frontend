import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, MenuItem, } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navigation = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '115px', xs: '30px' }, mt: { sm: '22px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '75px', height: '85px', margin: '0px 20px' }} />
    </Link>
    <Stack direction="row" gap="30px" fontFamily="Alegreya" fontSize="24px" alignItems="flex-end">
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      {/* <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a> */}
      <Link to="/about" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>About</Link>
      <Link to="/gallery" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Gallery</Link>
    </Stack>
  </Stack>
);

export default Navigation