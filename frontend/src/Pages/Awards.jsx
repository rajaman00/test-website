import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Breadcrumbs, Link} from '@mui/material';
import HeaderBox from './Header';

// Import images at the top of the file
import report2023_24 from '../assets/report1.jpg';
import report2022_23 from '../assets/report2.jpg';
import report2021_22 from '../assets/report3.png';
import report2020_21 from '../assets/report4.png';
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

const certificateDetails= [
  {
    title: 'वार्षिक रिपोर्ट 2023-24',
    img: report2023_24,
    alt: 'Annual Report 2023-24',
    link: 'https://example.com/report2023-24' // replace with actual link
  },
  {
    title: 'वार्षिक रिपोर्ट 2022-23',
    img: report2022_23,
    alt: 'Annual Report 2022-23',
    link: 'https://example.com/report2022-23' // replace with actual link
  },
  {
    title: 'वार्षिक रिपोर्ट 2021-22',
    img: report2021_22,
    alt: 'Annual Report 2021-22',
    link: 'https://example.com/report2021-22' // replace with actual link
  },
  {
    title: 'वार्षिक रिपोर्ट 2020-21',
    img: report2020_21,
    alt: 'Annual Report 2020-21',
    link: 'https://example.com/report2020-21' // replace with actual link
  },
];

const Certificates = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#' },
    { label: 'Awards and Achievements' }
];
  return (
    <>
    <NavigationBar/>
    <div>
    <HeaderBox
                backgroundImage={backgroundImage}
                title="Awards"
                breadcrumbs={breadcrumbs}
            />
           </div>
           <Grid container spacing={3} justifyContent="center" sx={{ padding: '20px',marginTop:'1rem' }}>
      {certificateDetails.map((certificateDetails, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Link href={certificateDetails.link} underline="none" target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="300"
                image={certificateDetails.img}
                alt={certificateDetails.alt}
                sx={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography variant="h6" component="div" align="center">
                  {certificateDetails.title}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
    <Footer/>
    </>
  );
};

export default Certificates;
