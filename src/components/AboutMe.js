import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const AboutMe = () => {
    return (
        <React.Fragment>
            <Container maxWidth="sm" component="main" sx={{ pt: 5, pb: 4 }}>
                <Typography
                    component="h1"
                    variant="h4"
                    align="left"
                    color="text.primary"
                    gutterBottom
                >
                    Who am I?
                </Typography>
                <Typography variant="h6" align="left" color="text.secondary" component="p" sx={{fontSize: { lg: '20px', xs:'15px' }}}>
                    I'm a warrior and I have no doubts about that. I love a great challenge, and enjoy the lessons learned along the way to success. I believe there is no shame in tasting defeat for the loser is the one who didn't learn from the experience. I've lived, I've learned, and now I do my best to train others to live a life they could be proud of no matter their situation.
                </Typography>
            </Container>
            <Container maxWidth="sm" component="main" sx={{ pt: 5, pb: 4 }}>
                <Typography
                    component="h1"
                    variant="h4"
                    align="left"
                    color="text.primary"
                    gutterBottom
                >
                    Why fitness?
                </Typography>
                <Typography variant="h6" align="left" color="text.secondary" component="p" sx={{fontSize: { lg: '20px', xs:'15px' }}}>
                As long as I can remember I loved movement, whether it was running around outside or playing competitive baseball as a child, or playing recreational sports with family and friends at the park. No matter what it was, I either played hard or didnt care to play at all. I remember always seeing my fa
                </Typography>
            </Container>
        </React.Fragment>
    )
}

export default AboutMe