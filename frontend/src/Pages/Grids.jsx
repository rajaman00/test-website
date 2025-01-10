import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import NavigationBar from '../../components/NavigationBar';
import HeaderBox from './Header';
import Footer from '../../components/Footer';
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg';

const Grids = () => {
  const rows = [
    { sNo: 1, name: 'GSS A', capacity220: '200 MVA', totalCapacity220: '400 MVA', capacity132: '150 MVA', totalCapacity132: '300 MVA', transmissionCircle: 'Circle 1' },
    { sNo: 2, name: 'GSS B', capacity220: '220 MVA', totalCapacity220: '440 MVA', capacity132: '160 MVA', totalCapacity132: '320 MVA', transmissionCircle: 'Circle 2' },
    { sNo: 3, name: 'GSS C', capacity220: '230 MVA', totalCapacity220: '460 MVA', capacity132: '170 MVA', totalCapacity132: '340 MVA', transmissionCircle: 'Circle 3' },
    { sNo: 4, name: 'GSS D', capacity220: '240 MVA', totalCapacity220: '480 MVA', capacity132: '180 MVA', totalCapacity132: '360 MVA', transmissionCircle: 'Circle 4' },
    { sNo: 5, name: 'GSS E', capacity220: '250 MVA', totalCapacity220: '500 MVA', capacity132: '190 MVA', totalCapacity132: '380 MVA', transmissionCircle: 'Circle 5' },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Transmission N/W', href: '#' },
    { label: 'Current Infrastructure' },
    { label: 'Grids' },
  ];

  return (
    <>
      <NavigationBar />
      <HeaderBox backgroundImage={backgroundImage} title="Grids" breadcrumbs={breadcrumbs} />

      {/* Centrally aligned heading with hover effect */}
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          marginTop: 5,
          marginBottom: 5,
          fontWeight: 'bold',
          color: '#0bafec',
          transition: 'color 0.3s, transform 0.3s',
          '&:hover': {
            color: '#ff5722',
            
          },
        }}
      >
        Operational Grids
      </Typography>

      <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto', marginTop: 10, marginBottom: 10 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: '#0bafec' }}>
            <TableRow>
              {/* Merge S.No */}
              <TableCell
                rowSpan={2}
                sx={{ fontWeight: 'bold', border: '1px solid black', textAlign: 'center', width: '10%', verticalAlign: 'middle', fontSize: '1.2rem' }}
              >
                Sl.No
              </TableCell>
              {/* Merge Name of GSS */}
              <TableCell
                rowSpan={2}
                sx={{ fontWeight: 'bold', border: '1px solid black', textAlign: 'center', width: '15%', verticalAlign: 'middle', fontSize: '1.05rem' }}
              >
                Name of GSS
              </TableCell>
              {/* 220/132 kV */}
              <TableCell
                align="center"
                colSpan={2}
                sx={{ fontWeight: 'bold', borderRight: '1px solid black', textAlign: 'center', width: '25%', border: '1px solid black', fontSize: '1.05rem' }}
              >
                220/132 kV
              </TableCell>
              {/* 132/33 kV */}
              <TableCell
                align="center"
                colSpan={2}
                sx={{ fontWeight: 'bold', borderRight: '1px solid black', textAlign: 'center', width: '25%', border: '1px solid black', fontSize: '1.05rem' }}
              >
                132/33 kV
              </TableCell>
              {/* Merge Transmission Circle */}
              <TableCell
                rowSpan={2}
                sx={{ fontWeight: 'bold', textAlign: 'center', width: '25%', verticalAlign: 'middle', border: '1px solid black', fontSize: '1.05rem' }}
              >
                Transmission Circle
              </TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              {/* Sub-columns */}
              <TableCell
                align="center"
                sx={{ border: '1px solid black', textAlign: 'center', width: '12.5%', verticalAlign: 'middle', backgroundColor: '#0bafec', fontWeight: 'bold', fontSize: '1.05rem' }}
              >
                Capacity
              </TableCell>
              <TableCell
                align="center"
                sx={{ border: '1px solid black', textAlign: 'center', width: '12.5%', verticalAlign: 'middle', backgroundColor: '#0bafec', fontWeight: 'bold', fontSize: '1.05rem' }}
              >
                Total Capacity
              </TableCell>
              <TableCell
                align="center"
                sx={{ border: '1px solid black', textAlign: 'center', width: '12.5%', verticalAlign: 'middle', backgroundColor: '#0bafec', fontWeight: 'bold', fontSize: '1.05rem' }}
              >
                Capacity
              </TableCell>
              <TableCell
                align="center"
                sx={{ border: '1px solid black', textAlign: 'center', width: '12.5%', verticalAlign: 'middle', backgroundColor: '#0bafec', fontWeight: 'bold', fontSize: '1.05rem' }}
              >
                Total Capacity
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  {rows.map((row, index) => (
    <TableRow
      key={index}
      sx={{
        backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff', // Alternate row colors
        '&:hover': { backgroundColor: '#f1f1f1', cursor: 'pointer' },
      }}
    >
      <TableCell sx={{ border: '1px solid black', textAlign: 'center', verticalAlign: 'middle' }}>{row.sNo}</TableCell>
      <TableCell sx={{ border: '1px solid black', textAlign: 'center', verticalAlign: 'middle' }}>{row.name}</TableCell>
      <TableCell align="center" sx={{ border: '1px solid black', textAlign: 'center', width: '12.5%', verticalAlign: 'middle' }}>
        {row.capacity220}
      </TableCell>
      <TableCell align="center" sx={{ border: '1px solid black', textAlign: 'center', width: '12.5%', verticalAlign: 'middle' }}>
        {row.totalCapacity220}
      </TableCell>
      <TableCell align="center" sx={{ border: '1px solid black', textAlign: 'center', width: '12.5%', verticalAlign: 'middle' }}>
        {row.capacity132}
      </TableCell>
      <TableCell align="center" sx={{ border: '1px solid black', textAlign: 'center', width: '12.5%', verticalAlign: 'middle' }}>
        {row.totalCapacity132}
      </TableCell>
      <TableCell sx={{ textAlign: 'center', verticalAlign: 'middle', border: '1px solid black' }}>{row.transmissionCircle}</TableCell>
    </TableRow>
  ))}
</TableBody>

        </Table>
      </TableContainer>

      <Footer />
    </>
  );
};

export default Grids;
