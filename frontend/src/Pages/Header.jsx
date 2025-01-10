import React from 'react';
import { Box, Typography, Breadcrumbs, Link } from '@mui/material';

const HeaderBox = ({ backgroundImage, title, breadcrumbs }) => {
  return (
    <Box
      sx={{
        // overflow:'hidden',
        width:'100%',
        position: 'relative',
        backgroundRepeat: 'no-repeat',
        height: '13rem',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '20px',
        textAlign: 'left',
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Shadow effect with transparency
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.7)', // Additional shadow
          zIndex: 1, // Ensure this is below the text and links
        },
        zIndex: 2, // Ensure the content is above the shadow
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 'bold', zIndex: 3, position: 'relative', marginLeft:5, fontFamily:'Times New Roman', }}>
        {title}
      </Typography>
      <Breadcrumbs  sx={{ color: 'white', marginTop: '10px', zIndex: 3, position: 'relative',fontSize:'1.2rem',marginLeft:5, fontFamily:'Times New Roman', }}>
        {breadcrumbs.map((breadcrumb, index) =>
          breadcrumb.href ? (
            <Link key={index} href={breadcrumb.href} underline="hover" sx={{ color: 'white' }}>
              {breadcrumb.label}
            </Link>
          ) : (
            <Typography key={index} color="white" sx={{fontSize:'1.2rem', fontFamily:'Times New Roman',}}>
              {breadcrumb.label}
            </Typography>
            
          ) 
        )}
      </Breadcrumbs>
    </Box>
  );
};

export default HeaderBox;
