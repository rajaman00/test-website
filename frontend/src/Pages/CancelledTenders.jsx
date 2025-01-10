import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Link, Box, Breadcrumbs } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import HeaderBox from './Header';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg';

const CancelledTenders = () => {
  const [tenders, setTenders] = useState([]);
  const navigate = useNavigate(); // To navigate to the details page

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Procurements', href: '#' },
    { label: 'Tenders' },
    { label: 'Cancelled Tenders' }
  ];

  // Fetch active tenders on component mount
  useEffect(() => {
    const fetchActiveTenders = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/tender/active");
        if (response.data.success) {
          setTenders(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching active tenders:', error);
      }
    };

    fetchActiveTenders();
  }, []);

  const handleClickTender = (id) => {
    navigate(`/active-tenders/view-tenders/${id}`); // Navigate to the details page of the clicked tender
  };

  return (
    <>
      <NavigationBar />
      <HeaderBox
        backgroundImage={backgroundImage}
        title="Cancelled Tenders"
        breadcrumbs={breadcrumbs}
      />
      <Card sx={{ maxWidth: 800, margin: '20px auto', padding: '10px', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Cancelled Tenders
          </Typography>
          <List>
            {tenders.map((tender) => (
              <ListItem 
                key={tender._id} 
                sx={{ padding: '15px 0', borderBottom: '1px solid #ddd', transition: 'background-color 0.3s', '&:hover': { backgroundColor: '#f5f5f5' } }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FiberManualRecordIcon sx={{ color: '#0bafec', fontSize: 12, marginRight: 1 }} />
                  <ListItemText 
                    primary={
                      <Link
                        onClick={() => handleClickTender(tender._id)} // Navigate to the details page
                        underline="none"
                        color="primary"
                        sx={{ fontSize: '16px', fontWeight: '500', transition: 'color 0.3s', '&:hover': { color: '#0056b3' } }}
                      >
                        {tender.Description}
                      </Link>
                    } 
                  />
                </Box>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      <Footer />
    </>
  );
};

export default CancelledTenders;

