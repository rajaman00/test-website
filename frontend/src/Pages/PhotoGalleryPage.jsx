import React, { useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Box, Breadcrumbs, Link, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import HeaderBox from './Header';

import FoundationDay from '../../public/images/PhotoGallery/FoundationDay.jpg';
import ElectionDay from '../../public/images/PhotoGallery/ElectionDay.jpg';
import GalleryImage from '../../public/images/PhotoGallery/GalleryImage.jpg';
import HindiDiwas from '../../public/images/PhotoGallery/HindiDiwas.jpg';
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

const photoDetails = [
    { year: 2024, title: 'Foundation Day 2024', img: FoundationDay, alt: 'Foundation Day 2023-24', link: '/photo-gallery/photo-gallery-details' },
    { year: 2023, title: 'Election Day', img: ElectionDay, alt: 'Annual Report 2022-23', link: 'https://example.com/report2022-23' },
    { year: 2022, title: 'वार्षिक रिपोर्ट 2021-22', img: GalleryImage, alt: 'Annual Report 2021-22', link: 'https://example.com/report2021-22' },
    { year: 2021, title: 'वार्षिक रिपोर्ट 2020-21', img: HindiDiwas, alt: 'Annual Report 2020-21', link: 'https://example.com/report2020-21' },
];

function PhotoGalleryPage() {
    const [selectedYear, setSelectedYear] = useState('All');
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Media', href: '#' },
        { label: 'Photo Gallery' }
    ];

    // Filter the photos based on the selected year
    const filteredPhotos = selectedYear === 'All'
        ? photoDetails
        : photoDetails.filter(photo => photo.year === selectedYear);

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
            
            <Box display="flex" justifyContent="flex-end" my={3} pr={3}>
                <FormControl variant="outlined" sx={{ minWidth: 200 }}>
                    <InputLabel>Filter by Year</InputLabel>
                    <Select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        label="Filter by Year"
                    >
                        <MenuItem value="All">All</MenuItem>
                        {[...new Set(photoDetails.map(photo => photo.year))].sort((a, b) => b - a).map(year => (
                            <MenuItem key={year} value={year}>{year}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

            <Grid container spacing={3} justifyContent="center" sx={{ padding: '20px', marginTop: '1rem' }}>
                {filteredPhotos.map((certificateDetails, index) => (
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
}

export default PhotoGalleryPage;
