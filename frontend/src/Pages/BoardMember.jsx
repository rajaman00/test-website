import React, { useState } from 'react';
import { Card, Box, Typography, Avatar, Link } from '@mui/material';
import HeaderBox from './Header';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer'
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'
import bm1 from '../../public/images/AboutImages/cmd.jpg'


const ProfileCard = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#' },
    { label: 'Board Of Directors' }
  ];

  // State to manage if the card is expanded or not
  const [isExpanded1, setIsExpanded1] = useState(false);

  // Function to toggle the expansion
  const handleToggleExpand1 = () => {
    setIsExpanded1(!isExpanded1);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expansion
  const handleToggleExpand = () => {
    setIsExpanded1(!isExpanded);
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
      <Card sx={{ width: '90%', display: 'flex', alignItems: 'center', padding: 2, margin: 'auto', borderBottom: '1px dashed gray', marginTop: '2rem' }}>
        <Box sx={{ width: '70%' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'right', color: '#2f2963' }} >
          Shri Pankaj Kumar Pal, Secretary,
          Department of Energy, GoB
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
            Director
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore pariatur neque magnam. Iusto harum eum a, dolore veritatis velit laborum cupiditate maiores veniam....
            {/* Conditionally render additional text */}
            {isExpanded1 && (
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum maxime aliquam cumque modi soluta expedita blanditiis, nihil consequatur officiis, ipsam alias temporibus dolore aperiam deserunt incidunt quibusdam sequi natus, aspernatur quam!
              </>
            )}
          </Typography>
          <Link href="#" sx={{ display: 'inline-flex', alignItems: 'center', mt: 1, fontWeight: 'bold' }} onClick={handleToggleExpand1}>
            {isExpanded1 ? 'Show Less' : 'Know More'}
          </Link>
        </Box>
        <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
          <Avatar
            src={bm1}// Replace with the actual image URL
            alt="Profile Picture"
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '6px solid #0bafec', // Adjust the color to match the image border
              boxSizing: 'border-box'
            }}
          />
        </Box>
      </Card>
      {/* Card 2 */}

      <Card sx={{ width: '90%', display: 'flex', alignItems: 'center', padding: 2, margin: 'auto', borderBottom: '1px dashed gray', marginTop: '2rem' }}>
        <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
          <Avatar
            src="https://via.placeholder.com/150" // Replace with the actual image URL
            alt="Profile Picture"
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '6px solid #0bafec', // Adjust the color to match the image border
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ipsum impedit repellat! Esse, nostrum asperiores laudantium vero architecto eius iusto blanditiis hic ipsum ratione libero, eligendi ipsam laborum ipsa, fugit inventore tempore voluptates unde?...
          </Typography>
          <Link href="#" sx={{ display: 'inline-flex', alignItems: 'center', mt: 1, fontWeight: 'bold' }}>
            अधिक जानकारी
          </Link>
        </Box>
      </Card>

      {/* Card 3 */}
      <Card sx={{ width: '90%', display: 'flex', alignItems: 'center', padding: 2, margin: 'auto', borderBottom: '1px dashed gray', marginTop: '2rem' }}>
        <Box sx={{ width: '70%' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'right', color: '#2f2963' }} >
            श्री जी रविशंकर
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
            निदेशक (वित्त)
          </Typography>
          <Typography variant="body2" color="textSecondary">
            जी रविशंकर, (57 वर्ष), (डीआईएन: 08816101) मद्रास विश्वविद्यालय से गणित विषय में सातक हैं
            और भारतीय लागत लेखाकार संस्थान से लागत लेखाकार हैं। उन्होंने अन्नामलाई विश्वविद्यालय
            से कार्मिक प्रबंधन और सामाग्री प्रबंधन...
            {/* Conditionally render additional text */}
            {isExpanded && (
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum maxime aliquam cumque modi soluta expedita blanditiis, nihil consequatur officiis, ipsam alias temporibus dolore aperiam deserunt incidunt quibusdam sequi natus, aspernatur quam!
              </>
            )}
          </Typography>
          <Link href="#" sx={{ display: 'inline-flex', alignItems: 'center', mt: 1, fontWeight: 'bold' }} onClick={handleToggleExpand}>
            {isExpanded ? 'Show Less' : 'Know More'}
          </Link>
        </Box>
        <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
          <Avatar
            src="https://via.placeholder.com/150" // Replace with the actual image URL
            alt="Profile Picture"
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '6px solid #0bafec', // Adjust the color to match the image border
              boxSizing: 'border-box'
            }}
          />
        </Box>
      </Card>

      {/* Card 4 */}

      <Card sx={{ width: '90%', display: 'flex', alignItems: 'center', padding: 2, margin: 'auto', borderBottom: '1px dashed gray', marginTop: '2rem' }}>
        <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
          <Avatar
            src="https://via.placeholder.com/150" // Replace with the actual image URL
            alt="Profile Picture"
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '6px solid #0bafec', // Adjust the color to match the image border
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
            जी रविशंकर, (57 वर्ष), (डीआईएन: 08816101) मद्रास विश्वविद्यालय से गणित विषय में सातक हैं
            और भारतीय लागत लेखाकार संस्थान से लागत लेखाकार हैं। उन्होंने अन्नामलाई विश्वविद्यालय
            से कार्मिक प्रबंधन और सामाग्री प्रबंधन...
          </Typography>
          <Link href="#" sx={{ display: 'inline-flex', alignItems: 'center', mt: 1, fontWeight: 'bold' }}>
            अधिक जानकारी
          </Link>
        </Box>
      </Card>

{/* Card 5 */}

<Card sx={{ width: '90%', display: 'flex', alignItems: 'center', padding: 2, margin: 'auto', borderBottom: '1px dashed gray', marginTop: '2rem' }}>
        <Box sx={{ width: '70%' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'right', color: '#2f2963' }} >
            श्री जी रविशंकर
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ fontWeight: 'bold', textAlign: 'right' }}>
            निदेशक (वित्त)
          </Typography>
          <Typography variant="body2" color="textSecondary">
            जी रविशंकर, (57 वर्ष), (डीआईएन: 08816101) मद्रास विश्वविद्यालय से गणित विषय में सातक हैं
            और भारतीय लागत लेखाकार संस्थान से लागत लेखाकार हैं। उन्होंने अन्नामलाई विश्वविद्यालय
            से कार्मिक प्रबंधन और सामाग्री प्रबंधन...
            {/* Conditionally render additional text */}
            {isExpanded && (
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum maxime aliquam cumque modi soluta expedita blanditiis, nihil consequatur officiis, ipsam alias temporibus dolore aperiam deserunt incidunt quibusdam sequi natus, aspernatur quam!
              </>
            )}
          </Typography>
          <Link href="#" sx={{ display: 'inline-flex', alignItems: 'center', mt: 1, fontWeight: 'bold' }} onClick={handleToggleExpand}>
            {isExpanded ? 'Show Less' : 'Know More'}
          </Link>
        </Box>
        <Box sx={{ width: '30%', display: 'flex', justifyContent: 'center' }}>
          <Avatar
            src="https://via.placeholder.com/150" // Replace with the actual image URL
            alt="Profile Picture"
            sx={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '6px solid #0bafec', // Adjust the color to match the image border
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

