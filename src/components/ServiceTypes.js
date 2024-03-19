import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ServiceTypes = () => {
    return (
        <React.Fragment>

            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 5, pb: 4 }}>
                <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    1-on-1 Coaching
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" component="p">
                    Transform your fitness journey with personalized training sessions tailored to your goals. Whether you're looking to lose weight, build muscle, or enhance your overall health, I'm dedicated to guiding you every step of the way!
                </Typography>
            </Container>

            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 5, pb: 4 }}>
                <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Group Training
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" component="p">
                   Don't want to train alone? That's okay! Bring a friend, maybe 3!! Our small group sessions, starting at $150, are designed to challenge and inspire you with a blend of strength training, boxing, and functional movements.
                </Typography>
            </Container>

            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 5, pb: 4 }}>
                <Typography
                    component="h1"
                    variant="h4"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Bulk Deals
                </Typography>
                <Typography variant="h6" align="center" color="text.secondary" component="p">
                   Look forward to a long term commitment! Buying sessions in bulk could keep you accountable and save you money! Ready to commit 2 to 3 times a week for the next 6 weeks? Reach out for the discounted pricing.
                </Typography>
            </Container>
        </React.Fragment>

    )
}

export default ServiceTypes