import React, { useState } from 'react';
import { Card, Box, Typography, Avatar, Link } from '@mui/material';
import HeaderBox from './Header';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg';
import bm1 from '../../public/images/AboutImages/cmd.jpg';

const ProfileCard = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#' },
    { label: 'Board Of Directors' }
  ];

  // State to manage if the card is expanded or not for each member
  const [expandedStates, setExpandedStates] = useState({
    member1: false,
    member2: false,
    member3: false,
    member4: false,
    member5: false,
  });

  // Function to toggle the expansion for a specific member
  const handleToggleExpand = (member) => {
    setExpandedStates((prevStates) => ({
      ...prevStates,
      [member]: !prevStates[member]
    }));
  };

  return (
    <>
      <NavigationBar />
      <HeaderBox
        backgroundImage={backgroundImage}
        title="Board Of Directors"
        breadcrumbs={breadcrumbs}
      />

      {/* Card 1 */}
      <Card
        sx={{
          width: '90%',
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          margin: 'auto',
          borderBottom: '1px dashed gray',
          marginTop: '2rem'
        }}
      >
        <Box sx={{ width: '70%' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'right', color: '#2f2963' }}>
            Shri Pankaj Kumar Pal, Secretary, Department of Energy, GoB
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
            Director
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore pariatur neque magnam...
            {expandedStates.member1 && (
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum maxime aliquam...
              </>
            )}
          </Typography>
          <Link
            href="#"
            sx={{ display: 'inline-flex', alignItems: 'center', mt: 1, fontWeight: 'bold' }}
            onClick={(e) => {
              e.preventDefault();
              handleToggleExpand('member1');
            }}
          >
            {expandedStates.member1 ? 'Show Less' : 'Know More'}
          </Link>
        </Box>
        <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
          <Avatar
            src={bm1}
            alt="Profile Picture"
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '6px solid #0bafec',
              boxSizing: 'border-box'
            }}
          />
        </Box>
      </Card>

      {/* Card 2 */}
      <Card
        sx={{
          width: '90%',
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          margin: 'auto',
          borderBottom: '1px dashed gray',
          marginTop: '2rem'
        }}
      >
        <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
          <Avatar
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '6px solid #0bafec',
              boxSizing: 'border-box'
            }}
          />
        </Box>
        <Box sx={{ width: '70%' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Shri Pankaj Kumar Pal, CMD. BSPHCL
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Chairman
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit...
            {expandedStates.member2 && (
              <>
                Additional details about the member...
              </>
            )}
          </Typography>
          <Link
            href="#"
            sx={{ display: 'inline-flex', alignItems: 'center', mt: 1, fontWeight: 'bold' }}
            onClick={(e) => {
              e.preventDefault();
              handleToggleExpand('member2');
            }}
          >
            {expandedStates.member2 ? 'Show Less' : 'Know More'}
          </Link>
        </Box>
      </Card>

      {/* Card 3 */}
      <Card
        sx={{
          width: '90%',
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          margin: 'auto',
          borderBottom: '1px dashed gray',
          marginTop: '2rem'
        }}
      >
        <Box sx={{ width: '70%' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'right', color: '#2f2963' }}>
            श्री जी रविशंकर
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
            निदेशक (वित्त)
          </Typography>
          <Typography variant="body2" color="textSecondary">
            जी रविशंकर, (57 वर्ष), मद्रास विश्वविद्यालय से गणित विषय में स्नातक हैं...
            {expandedStates.member3 && (
              <>
                Additional details about the member...
              </>
            )}
          </Typography>
          <Link
            href="#"
            sx={{ display: 'inline-flex', alignItems: 'center', mt: 1, fontWeight: 'bold' }}
            onClick={(e) => {
              e.preventDefault();
              handleToggleExpand('member3');
            }}
          >
            {expandedStates.member3 ? 'Show Less' : 'Know More'}
          </Link>
        </Box>
        <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
          <Avatar
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '6px solid #0bafec',
              boxSizing: 'border-box'
            }}
          />
        </Box>
      </Card>

      {/* Card 4 */}
      <Card
        sx={{
          width: '90%',
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          margin: 'auto',
          borderBottom: '1px dashed gray',
          marginTop: '2rem'
        }}
      >
        <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
          <Avatar
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '6px solid #0bafec',
              boxSizing: 'border-box'
            }}
          />
        </Box>
        <Box sx={{ width: '70%' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            श्री जी रविशंकर
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            निदेशक (वित्त)
          </Typography>
          <Typography variant="body2" color="textSecondary">
            जी रविशंकर, (57 वर्ष), मद्रास विश्वविद्यालय से गणित विषय में स्नातक हैं...
            {expandedStates.member4 && (
              <>
                Additional details about the member...
              </>
            )}
          </Typography>
          <Link
            href="#"
            sx={{ display: 'inline-flex', alignItems: 'center', mt: 1, fontWeight: 'bold' }}
            onClick={(e) => {
              e.preventDefault();
              handleToggleExpand('member4');
            }}
          >
            {expandedStates.member4 ? 'Show Less' : 'Know More'}
          </Link>
        </Box>
      </Card>

      {/* Card 5 */}
      <Card
        sx={{
          width: '90%',
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          margin: 'auto',
          borderBottom: '1px dashed gray',
          marginTop: '2rem',
          marginBottom: '2rem'
        }}
      >
        <Box sx={{ width: '70%' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'right', color: '#2f2963' }}>
            श्री जी रविशंकर
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
            निदेशक (वित्त)
          </Typography>
          <Typography variant="body2" color="textSecondary">
            जी रविशंकर, (57 वर्ष), मद्रास विश्वविद्यालय से गणित विषय में स्नातक हैं...
            {expandedStates.member5 && (
              <>
                Additional details about the member...
              </>
            )}
          </Typography>
          <Link
            href="#"
            sx={{ display: 'inline-flex', alignItems: 'center', mt: 1, fontWeight: 'bold' }}
            onClick={(e) => {
              e.preventDefault();
              handleToggleExpand('member5');
            }}
          >
            {expandedStates.member5 ? 'Show Less' : 'Know More'}
          </Link>
        </Box>
        <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
          <Avatar
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '6px solid #0bafec',
              boxSizing: 'border-box'
            }}
          />
        </Box>
      </Card>

      <Footer />
    </>
  );
};

export default ProfileCard;
