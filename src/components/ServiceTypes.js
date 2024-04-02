import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const ServiceTypes = () => {
    return (
        <React.Fragment>
            <Grid direction="row" justifyContent="space-evenly" alignItems="center" rowSpacing={1} spacing={3} sx={{ p: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
                <Grid maxWidth="sm" component="main" sx={{ p: { xs: 2, sm: 4, md: 6, lg: 8 }, }}>
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        1-on-1 Coaching
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" component="p" sx={{ fontSize: { lg: 20, md: 20, sm: 20, xs: 13, } }}>
                        Transform your fitness journey with personalized training sessions tailored to your goals. Whether you're looking to lose weight, build muscle, or enhance your overall fitness & health, I'm dedicated to guiding you every step of the way!
                    </Typography>
                </Grid>

                <Grid maxWidth="sm" component="main" sx={{ p: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Group Training
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" component="p" sx={{ fontSize: { lg: 20, md: 16, sm: 20, xs: 13, } }}>
                        Don't want to train alone? That's okay! Bring a friend, maybe 3!! Our small group sessions, starting at $150, are designed to challenge and inspire you with a blend of strength training, boxing, and functional movements.
                    </Typography>
                </Grid>

                <Grid maxWidth="sm" component="main" sx={{ p: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Bulk Deals
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" component="p" sx={{ fontSize: { lg: 20, md: 16, sm: 20, xs: 13, } }}>
                        Are you ready to commit to your long term goals? Buying sessions in bulk could help hold you accountable to that and save you money! If you're ready to commit reach out for the discounted session pricing.
                    </Typography>
                </Grid>

                <Grid maxWidth="sm" component="main" sx={{ p: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
                    <Typography
                        component="h1"
                        variant="h4"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Pricing
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" component="p" sx={{ fontSize: { lg: 20, md: 16, sm: 15, xs: 13, } }}>
                        Take control of your health and well-being with one-on-one guidance and support from a personal trainer. It is time to invest in yourself and your fitness goals and see the results you've always dreamed of.
                    </Typography>
                </Grid>

            </Grid>
        </React.Fragment >

    )
}

export default ServiceTypes