import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import NavigationBar from '../../components/NavigationBar';
import HeaderBox from './Header';
import Footer from '../../components/Footer'
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg';

const TransmissionLines = () => {
  const rows = [
    { sNo: 1, name: 'Line A', lineType: 'Single', circuit: 'ACSR', routeLength: '50 km', totalLength: '52 km', conductorType: 'ACSR' },
    { sNo: 2, name: 'Line B', lineType: 'Double', circuit: 'Copper', routeLength: '100 km', totalLength: '105 km', conductorType: 'Copper' },
    { sNo: 3, name: 'Line C', lineType: 'Single', circuit: 'AAC', routeLength: '80 km', totalLength: '82 km', conductorType: 'AAC' },
    { sNo: 4, name: 'Line D', lineType: 'Double', circuit: 'AAAC', routeLength: '120 km', totalLength: '125 km', conductorType: 'AAAC' },
    { sNo: 5, name: 'Line E', lineType: 'Triple', circuit: 'ACSR', routeLength: '150 km', totalLength: '155 km', conductorType: 'ACSR' },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Transmission N/W', href: '#' },
    { label: 'Current Infrastructure' }
  ];

  return (
    <>
      <NavigationBar />
      <HeaderBox
        backgroundImage={backgroundImage}
        title="Transmission Lines"
        breadcrumbs={breadcrumbs}
      />

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
        Operational Transmission Lines
      </Typography>

      <TableContainer component={Paper} sx={{ width: '80%', margin: 'auto', marginTop: 2, marginBottom: 2 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: '#0bafec' }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', width: '14.29%', border: '1px solid black' }}>S.No</TableCell>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', width: '14.29%', border: '1px solid black' }}>Name of Line</TableCell>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', width: '14.29%', border: '1px solid black' }}>Line Type</TableCell> {/* New column */}
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', width: '14.29%', border: '1px solid black' }}>Circuit</TableCell>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', width: '14.29%', border: '1px solid black' }}>Route Length</TableCell>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', width: '14.29%', border: '1px solid black' }}>Total Length</TableCell>
              <TableCell sx={{ fontWeight: 'bold', textAlign: 'center', width: '14.29%', border: '1px solid black' }}>Conductor Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:hover': { backgroundColor: '#f1f1f1', cursor: 'pointer' },
                }}
              >
                <TableCell sx={{ textAlign: 'center', padding: '16px', border: '1px solid black' }}>{row.sNo}</TableCell>
                <TableCell sx={{ textAlign: 'center', padding: '16px', border: '1px solid black' }}>{row.name}</TableCell>
                <TableCell sx={{ textAlign: 'center', padding: '16px', border: '1px solid black' }}>{row.lineType}</TableCell> {/* New column data */}
                <TableCell sx={{ textAlign: 'center', padding: '16px', border: '1px solid black' }}>{row.circuit}</TableCell>
                <TableCell sx={{ textAlign: 'center', padding: '16px', border: '1px solid black' }}>{row.routeLength}</TableCell>
                <TableCell sx={{ textAlign: 'center', padding: '16px', border: '1px solid black' }}>{row.totalLength}</TableCell>
                <TableCell sx={{ textAlign: 'center', padding: '16px', border: '1px solid black' }}>{row.conductorType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </>
  );
};

export default TransmissionLines;
