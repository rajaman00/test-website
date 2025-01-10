import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import NavigationBar from '../../components/NavigationBar';
import HeaderBox from './Header';
import Footer from '../../components/Footer'
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'

const CompanyOverview = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#' },
    { label: 'Company Overview' }
  ];

  return (
    <>
      <NavigationBar/>
      <HeaderBox
        backgroundImage={backgroundImage}
        title="Company Overview"
        breadcrumbs={breadcrumbs}
      />
      <Box sx={{ padding: '40px', backgroundColor: '#fff' }}>
        <Grid container spacing={2}>
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
              WHO WE ARE
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '16px', fontWeight: 'bold' }}>
              Power Grid Corporation of India Limited (POWERGRID), is a Schedule 'A', 'Maharatna' Public Sector Enterprise of Govt. of India which was incorporated on 23rd Oct 1989 under the Company Act, 1956. POWERGRID is a listed Company, with 51.34% holding of Government of India and the balance is held by Institutional Investors and public.
            </Typography>

            {/* Bullet Points */}
            <Box sx={{ marginTop: '32px' }}>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <CheckCircleOutlineIcon sx={{ marginRight: '8px', color: '#4CAF50' }} />
                India’s largest Electric Power Transmission Utility
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <CheckCircleOutlineIcon sx={{ marginRight: '8px', color: '#4CAF50' }} />
                Listed Company since 2007
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <CheckCircleOutlineIcon sx={{ marginRight: '8px', color: '#4CAF50' }} />
                Consistently rated “Excellent” under Memorandum of Understanding with Ministry of Power since 1993-94
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <CheckCircleOutlineIcon sx={{ marginRight: '8px', color: '#4CAF50' }} />
                Credit Rating
              </Typography>
            </Box>

            {/* Ratings */}
            <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '16px' }}>
              International Ratings (consistent with GoI's Sovereign rating)
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '8px' }}>
              Standard & Poor's - BBB+ (Outlook-Stable) <br />
              Fitch - BBB- (Outlook-Stable) <br />
              Moody’s – Baa3 (Outlook-Stable)
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: 'bold', marginTop: '16px' }}>
              Domestic
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '8px' }}>
              CRISIL - CRISIL AAA/Stable (Highest Safety) <br />
              ICRA - [ICRA] AAA/Stable (Highest Safety) <br />
              CARE - CARE AAA (Highest Safety/Lowest Credit Risk)
            </Typography>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6}>
            {/* Background image placeholder */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%', // Set a height to your preference
                overflow: 'hidden',
              }}
            >
              {/* Diagonal Image */}
              <Box
                component="div"
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundImage: 'url(https://www.powergrid.in/sites/default/files/inline-images/who-we-are-img.jpg)', // Replace with your image link
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  clipPath: 'polygon(0 0, 100% 0%, 100% 80%, 0% 100%)', // Creates the diagonal effect
                }}
              />

              {/* Overlay Box */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  backgroundColor: 'rgba(0, 51, 102, 0.8)', // Dark blue color with transparency
                  padding: '20px',
                }}
              >
                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
                  Achieving Continuous Improvements Through Innovation and State of the Art Technology.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>


      <Box sx={{ padding: '10px', maxWidth: '1200px', margin: 'auto' }}>
        <Typography variant="h2" component="h2" gutterBottom>
          What We Do
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginBottom: '20px' }}>
          POWERGRID is mainly engaged in the business of transmission of power through its EHVAC/HVDC transmission network. The company has diversified into telecom business by leveraging its Pan India transmission network through stringing of optical ground wire(OPGW). POWERGRID has provided/providing consultancy services to domestic and international clients by leveraging its capability and experience in the field of power transmission, sub transmission, distribution management, load dispatch & communication etc.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              src="your-image-path.jpg"
              alt="Power Grid"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h4" gutterBottom>
              Transmission
            </Typography>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li>Transmission System for CGS, IPPs, UMPPs and Renewable Energy Integration</li>
              <li>#0bafec Energy Corridors</li>
              <li>Transmission Scheme for Ultra Mega Solar Power Parks</li>
              <li>Grid strengthening schemes</li>
              <li>Inter-state, Intra-state, Inter-regional links</li>
              <li>High Capacity Transmission Corridors</li>
              <li>Strengthening International links with neighboring countries</li>
            </ul>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: '40px', maxWidth: '1200px', margin: 'auto' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h4" gutterBottom>
              TELECOM
            </Typography>
            <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
              <li>Telecom business under Brand Name ‘POWERTEL’</li>
              <li>Range of Services under Unified license as National Long Distance (NLD) and Internet Service Provider Category ‘A’(ISP-‘A’) Service authorization</li>
              <li>Neutral carrier in the point-to-point Bandwidth Leasing business (DLC)</li>
              <li>Enterprise Services: MPLS VPN & Internet Services with built-in Quality of Service (QoS) and Class of Service (CoS) SLA parameters</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              sx={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              src="your-image-path.jpg"
              alt="Telecom Tower"
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: '40px', maxWidth: '1200px', margin: 'auto' }}>
        <Typography variant="h3" component="h3" gutterBottom sx={{ fontWeight: '700' }}>
          KEY STATISTICS
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          (As on 31/08/2024) # include TBCB elements; exclude PG InvIT
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: '40px' }}>
          {/* Transmission Section */}
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" gutterBottom sx={{ fontWeight: '550' }}>
              TRANSMISSION
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <Typography variant="h4" component="p" color="#0bafec" gutterBottom>
                  1,78,195 ckm
                </Typography>
                <Typography variant="body1" component="p">
                  Transmission Lines
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="h4" component="p" color="#0bafec" gutterBottom>
                  278
                </Typography>
                <Typography variant="body1" component="p">
                  Sub-Stations
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="h4" component="p" color="#0bafec" gutterBottom>
                  100%
                </Typography>
                <Typography variant="body1" component="p">
                  System Availability
                </Typography>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="h4" component="p" color="#0bafec" gutterBottom>
                  5,33,646 MVA
                </Typography>
                <Typography variant="body1" component="p">
                  Transformation Capacity
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Telecom Section */}
          <Grid item xs={12}>
            <Typography variant="h5" component="h5" gutterBottom sx={{ fontWeight: '550' }}>
              TELECOM
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <Typography variant="h4" component="p" color="#0bafec" gutterBottom>
                  78,000 km
                </Typography>
                <Typography variant="body1" component="p">
                  Optical Fiber Network
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="h4" component="p" color="#0bafec" gutterBottom>
                  380+
                </Typography>
                <Typography variant="body1" component="p">
                  PoPs
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="h4" component="p" color="#0bafec" gutterBottom>
                  500+
                </Typography>
                <Typography variant="body1" component="p">
                  Clients
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

<Footer/>
    </>
  );
};

export default CompanyOverview;
