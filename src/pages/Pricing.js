import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

const tiers = [
  {
    title: 'Personalized Program',
    price: '60',
    description: [
      'Personalized Training Program',
      'Monthly Update',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
  {
    title: '1-ON-1',
    subheader: 'Most Popular',
    price: '125',
    description: [
      'In Person Coaching',
      'Nutritional Guidance',
      'Priority message access',
      'Priority email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'contained',
  },
  {
    title: 'Full Online-Package',
    price: '100',
    description: [
      'Nutritional Guidance',
      'Personalized Program',
      'Help message access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

function Pricing() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact")
  }
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <Container sx={{maxWidth: {lg:'lg', md: 'md', sm:'sm', xs: 'sm'}, }} component="main">
        <Grid container spacing={5} alignItems="center">
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={10}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === '1-ON-1' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    { tier.title === '1-ON-1'  ?(
                    <Typography variant="h6" color="text.secondary">
                        /per session 
                      </Typography> ): (
                        <Typography variant="h6" color="text.secondary">
                          /mo 
                      </Typography>
                      )}
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} value={tier.buttonText} onClick={handleClick}>{tier.buttonText}</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Pricing