import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography ,  } from "@mui/material";
import { Box, Breadcrumbs, Link, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import NavigationBar from '../../components/NavigationBar'
import HeaderBox from './Header';
import Footer from '../../components/Footer'
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'

// Example data for cards
const cardData = [
  {
    title: "World Energy Congress (WEC) 2024",
    image: "path/to/your/image1.jpg", // Replace with actual image path
  },
  {
    title: "Inauguration of POWERGRID Vishram Sadan at Vadodara",
    image: "path/to/your/image2.jpg", // Replace with actual image path
  },
  {
    title: "Convergence 2023",
    image: "path/to/your/image3.jpg", // Replace with actual image path
  },
  {
    title: "NTAMC",
    image: "path/to/your/image4.jpg", // Replace with actual image path
  },
  {
    title: "International Business",
    image: "path/to/your/image5.jpg", // Replace with actual image path
  },
  {
    title: "Technology Development (R&D)",
    image: "path/to/your/image6.jpg", // Replace with actual image path
  },
];

const ImageCardGrid = () => {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Media', href: '#' },
        { label: 'Photo Gallery' },
        { label: 'Photo Gallery Details' }
    ];

  return (
    <>
     <NavigationBar/>
            <div>
                <HeaderBox
                    backgroundImage={backgroundImage}
                    title="Photo Gallery"
                    breadcrumbs={breadcrumbs}
                />
            </div>
    <Grid container spacing={3} style={{ padding: "20px" }}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card style={{ borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}>
            <CardMedia
              component="img"
              height="150"
              image={card.image}
              alt={card.title}
              style={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                {card.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Footer/>
    </>
  );
};

export default ImageCardGrid;
