import React from 'react';
import { Box, Stack} from '@mui/material';
import Logo from '../assets/images/logi-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '175px' }} />
    </Stack>
  </Box>
);

export default Footer;