import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import NavigationBar from '../../components/NavigationBar';
import HeaderBox from './Header';
import Footer from '../../components/Footer'
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  width: '90%',
  margin: '20px auto', // Center the table with margin
  boxShadow: theme.shadows[5],
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // Header color
  '& .MuiTableCell-head': {
    color: theme.palette.common.white, // Header text color
    fontWeight: 'bold',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover, // Hover effect on rows
  },
}));

function TAFM() {
  const tableData = [
    { id: 1, month: 'January', kv220: 95, kv132: 92, overall: 93.5 },
    { id: 2, month: 'February', kv220: 96, kv132: 91, overall: 93 },
    { id: 3, month: 'March', kv220: 94, kv132: 90, overall: 92 },
    { id: 4, month: 'April', kv220: 97, kv132: 93, overall: 95 },
    { id: 5, month: 'May', kv220: 93, kv132: 89, overall: 91 },
  ];

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Transmission N/W', href: '#' },
    { label: 'System Parameters' }
  ];

  return (
    <>
       <NavigationBar/>
    <HeaderBox
      backgroundImage={backgroundImage}
      title="TAFM"
      breadcrumbs={breadcrumbs}
    />
    <StyledTableContainer component={Paper}>
      <Table aria-label="styled table">
        <StyledTableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="center">Month</TableCell>
            <TableCell align="center">220 kV TAFM (%)</TableCell>
            <TableCell align="center">132 kV TAFM (%)</TableCell>
            <TableCell align="center">Overall TAFM (%)</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {tableData.map((row) => (
            <StyledTableRow key={row.id}>
              <TableCell component="th" scope="row">{row.id}</TableCell>
              <TableCell align="center">{row.month}</TableCell>
              <TableCell align="center">{row.kv220}%</TableCell>
              <TableCell align="center">{row.kv132}%</TableCell>
              <TableCell align="center">{row.overall}%</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
    <Footer/>
    </>
  );
}

export default TAFM;
