import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import HeaderBox from './Header';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer'
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  width: '80%', // Set width to 80% of the screen
  margin: '20px auto', // Center the table horizontally and add some top margin
  boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
  borderRadius: '10px',
  overflow: 'hidden',
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: '#3f51b5',
  color: '#fff',
  '& .MuiTableCell-root': {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '16px',
  },
}));

const StyledTableBody = styled(TableBody)(({ theme }) => ({
  '& .MuiTableRow-root': {
    '&:nth-of-type(odd)': {
      backgroundColor: theme?.palette?.action?.hover || '#f0f0f0', // Fallback color if theme is not defined
    },
    '& .MuiTableCell-root': {
      textAlign: 'center',
    },
  },
}));

const dummyData = [
  { id: 1, monthYear: 'August 2024', atc: 1000, ttc: 1500, constraints: 'No major constraints' },
  { id: 2, monthYear: 'September 2024', atc: 1050, ttc: 1600, constraints: 'Minor line repair' },
  { id: 3, monthYear: 'October 2024', atc: 1100, ttc: 1700, constraints: 'None' },
  { id: 4, monthYear: 'November 2024', atc: 1150, ttc: 1800, constraints: 'Maintenance work' },
];

const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Transmission N/W', href: '#' },
  { label: 'System Parameters' },
  { label: 'ATC/TTC' },
];

const AtcTtcTable = () => {
  return (
    <>
      <NavigationBar />
      <HeaderBox
        backgroundImage={backgroundImage}
        title="ATC/TTC"
        breadcrumbs={breadcrumbs}
      />
      <StyledTableContainer component={Paper}>
        <Typography variant="h6" sx={{ textAlign: 'center', padding: '10px 0', backgroundColor: '#f5f5f5' }}>
          ATC/TTC Data Table
        </Typography>
        <Table>
          <StyledTableHead>
            <TableRow>
              <TableCell>S.No.</TableCell>
              <TableCell>Month & Year</TableCell>
              <TableCell>ATC (MW)</TableCell>
              <TableCell>TTC (MW)</TableCell>
              <TableCell>Constraints & Assumptions</TableCell>
            </TableRow>
          </StyledTableHead>
          <StyledTableBody>
            {dummyData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.monthYear}</TableCell>
                <TableCell>{row.atc}</TableCell>
                <TableCell>{row.ttc}</TableCell>
                <TableCell>{row.constraints}</TableCell>
              </TableRow>
            ))}
          </StyledTableBody>
        </Table>
      </StyledTableContainer>
      <Footer/>
    </>
  );
};

export default AtcTtcTable;
