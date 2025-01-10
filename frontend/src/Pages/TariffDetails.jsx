import React, { useState } from 'react';
import { Card, CardContent, Typography, List, ListItem, Link, Box, Collapse, Breadcrumbs, Divider} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import NavigationBar from '../../components/NavigationBar';
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg';
import Footer from '../../components/Footer';

const tariffData = [
  {
    id: 'fy2024-25',
    title: 'FY 2024-2025',
    content: [
      { name: 'Bihar SLDC APR, ARR, Op. Charges24-25 Add. Queries', url: 'https://example.com/document1' },
      { name: 'Bihar SLDC APR, ARR and Op. Charges 24-25 Tables', url: 'https://example.com/document2' },
      { name: 'Bihar SLDC APR, ARR and Op. Charges Petition 24-25', url: 'https://example.com/document3' },
      { name: 'Bihar SLDC APR, ARR and OC 24-2025 Pub Notice Hin', url: 'https://example.com/document4' },
      { name: 'Bihar SLDC APR, ARR and OC 24-2025 Pub Notice Eng', url: 'https://example.com/document5' },
      { name: 'BSPTCL Tariff Petition Additional Info Annex-5', url: 'https://example.com/document6' },
      // Add more content as needed
    ]
  },
  {
    id: 'fy2023-24',
    title: 'FY 2023-2024',
    content: [
      { name: 'FY 2023-24 Document 1', url: 'https://example.com/document7' },
      { name: 'FY 2023-24 Document 2', url: 'https://example.com/ document8' },
      // Add more content as needed
    ]
  },
  {
    id: 'fy2022-23',
    title: 'FY 2022-2023',
    content: [
      { name: 'FY 2022-23 Document 1', url: 'https://example.com/document9' },
      { name: 'FY 2022-23 Document 2', url: 'https://example.com/document10' },
      // Add more content as needed
    ]
  },
  // Add more sections as needed
];

const TariffDetails = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (

    <>
    <NavigationBar/>

    <Box
      sx={{
        position: 'relative',
        height: '13rem',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        padding: '20px',
        textAlign: 'left'
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
      Tariff Details
      </Typography>
      <Breadcrumbs sx={{ color: 'white', marginTop: '10px' }}>
        <Link href="/" underline="hover" sx={{ color: 'white' }}>
          Home
        </Link>
        <Link href="#" underline="hover" sx={{ color: 'white' }}>
        Tariff Details
        </Link>
        <Typography color="white">Tariff Details</Typography>
      </Breadcrumbs>
    </Box>


    <Card sx={{ maxWidth: 800, margin: '20px auto', padding: '10px', boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Tariff Details
        </Typography>
        {tariffData.map((section) => (
          <Box key={section.id}>
            <ListItem 
              button 
              onClick={() => handleToggle(section.id)} 
              sx={{ 
                backgroundColor: expanded === section.id ? '#f5f5f5' : 'transparent',
                borderBottom: '1px solid #ddd',
                '&:hover': { backgroundColor: '#f5f5f5' },
              }}
            >
              <Typography variant="h6" color="secondary">{section.title}</Typography>
              {expanded === section.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItem>
            <Collapse in={expanded === section.id} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {section.content.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem sx={{ paddingLeft: 4 }}>
                      <Link 
                        href={item.url} 
                        underline="none" 
                        color="primary" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </Link>
                    </ListItem>
                    {index < section.content.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </CardContent>
    </Card>

    <Footer/>
    </>
  );
};

export default TariffDetails;
