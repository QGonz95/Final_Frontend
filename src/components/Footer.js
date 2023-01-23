import React from 'react';
import { Box, Stack} from '@mui/material';
import Logo from '../assets/images/logi-1.png';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/"  sx={{pb: '10px',}} >
        War-Heart Training
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const Footer = () => (
  <Box mt="px" bgcolor="">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="10px" pt="40px">
      <img src={Logo} alt="logo" style={{ width: '350px', height: '100px' }} />
      <Copyright/>
    </Stack>
  </Box>
);

export default Footer;