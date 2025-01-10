import React from 'react';
import NavigationBar from '../../components/NavigationBar'
import HeaderBox from './Header';
import Footer from '../../components/Footer'
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';

const screenReaders = [
  { name: 'Screen Access For All (SAFA)', website: 'http://safa-reader.software.informer.com/download/', type: 'Free' },
  { name: 'Non Visual Desktop Access (NVDA)', website: 'http://www.nvda-project.org/', type: 'Free' },
  { name: 'System Access To Go', website: 'http://www.satogo.com/', type: 'Free' },
  { name: 'Thunder', website: 'http://www.screenreader.net/index.php', type: 'Free' },
  { name: 'WebAnywhere', website: 'http://webanywhere.cs.washington.edu/wa.php', type: 'Free' },
  { name: 'Hal', website: 'http://www.yourdolphin.co.uk/productdetail.asp', type: 'Commercial' },
];

const ScreenReader = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Screen Reader', href: '#' },
    
  ];
  return (

    <>
     <NavigationBar />
      <HeaderBox
        backgroundImage={backgroundImage}
        title="Screen Reader"
        breadcrumbs={breadcrumbs}
      />

    <TableContainer component={Paper}>
      <Typography variant="h5" style={{ padding: '16px', fontWeight: 'bold' }}>
        Various Screen Readers to choose from
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ backgroundColor: '#283593', color: 'white', fontWeight: 'bold' }}>Screen Reader</TableCell>
            <TableCell style={{ backgroundColor: '#283593', color: 'white', fontWeight: 'bold' }}>Website</TableCell>
            <TableCell style={{ backgroundColor: '#283593', color: 'white', fontWeight: 'bold' }}>Free / Commercial</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {screenReaders.map((reader) => (
            <TableRow key={reader.name}>
              <TableCell>{reader.name}</TableCell>
              <TableCell>
                <a href={reader.website} target="_blank" rel="noopener noreferrer" style={{ color: '#1a73e8' }}>
                  {reader.website}
                </a>
              </TableCell>
              <TableCell>{reader.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default ScreenReader;
