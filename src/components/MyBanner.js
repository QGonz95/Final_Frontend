import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Me from '../assets/images/banner.png';

const MyBanner = () => (
  <Box sx={{ mt: { lg: '176px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">War-Heart Training</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Self Care,<br />
      Takes Effort
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Try out some exercises to get started<br />
      Reach out for Coaching.
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '175px' }}>
      Exercise
    </Typography>
    <img src={Me} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default MyBanner;