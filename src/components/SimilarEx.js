import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import SideScroll from './SideScroll';
import Load from './Load';

const SimilarEx = ({ muscleTarget, name }) => (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
            Similar Exercises For <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span>
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {muscleTarget.length !== 0 ? <SideScroll data={muscleTarget} /> : <Load />}
    </Stack>
  </Box>
);

export default SimilarEx