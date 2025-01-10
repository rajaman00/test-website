// import React from 'react'
// import {
//     Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Link, Breadcrumbs, Box
//   } from '@mui/material';
// import NavigationBar from '../../components/NavigationBar'
// import HeaderBox from './Header';
// import Footer from '../../components/Footer'
// import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'

// const data = [
//     {
//       issueDate: '25-Jul-2024',
//       department: 'Project and Planning',
//       headline: 'Safety Warning Notice',
//       description: { text: 'Public Notice regarding safety warning in light of charging of 132 kV double circuit GSS Udakishanganj-Murliganj Transmission Line on or after 30.07.2024', url: 'https://example.com/notice1' }
//     },
//     {
//       issueDate: '19-Jul-2024',
//       department: 'Human Resource and Administration',
//       headline: 'New Employee Facilities',
//       description: { text: 'Regarding new facilities for employees of BSPTCL via ESS-MSS Portal vide OO No 391 dated 19-07-2024', url: 'https://example.com/notice2' }
//     },
//     {
//       issueDate: '01-Jul-2024',
//       department: 'Human Resource and Administration',
//       headline: 'Expression of Interest',
//       description: { text: 'Regarding submitting expression of interest to work as Officer on Special Duty (Technical) in the treasury of MD, BSPTCL, Patna vide Letter No 1666 dated 01-07-24', url: 'https://example.com/notice3' }
//     },
//     {
//       issueDate: '10-Jun-2024',
//       department: 'Human Resource and Administration',
//       headline: 'Free Medical Camp',
//       description: { text: 'Regarding free medical camp on 12-06-24 by Mediversal Healthcare Pvt. Ltd. vide Letter No 1478 dated 10-06-2024', url: 'https://example.com/notice4' }
//     },
//     {
//       issueDate: '05-Jun-2024',
//       department: 'Human Resource and Administration',
//       headline: 'Employee Selfies Initiative',
//       description: { text: 'Selfies of BSPTCL employees from Patna Sahib and Patliputra Lok Sabha Constituencies', url: 'https://example.com/notice5' }
//     },
//     {
//       issueDate: '31-May-2024',
//       department: 'Human Resource and Administration',
//       headline: 'Online Medical Portal Instructions',
//       description: { text: 'Instructions for the online medical portal for BSPHCL and its subsidiary companies', url: 'https://example.com/notice6' }
//     },
// ];

// function OfficeOrder() {

//   const breadcrumbs = [
//     { label: 'Home', href: '/' },
//     { label: 'Notices', href: '#' },
//     { label: 'Office Orders' }
//   ];

//   return (
//     <>
//        <div className="officeOrderContainer">
//         <div>
//             <NavigationBar/>
//         </div>
//         <div className="orderContent">
//            <div>
//            <HeaderBox
//                 backgroundImage={backgroundImage}
//                 title="Office Orders"
//                 breadcrumbs={breadcrumbs}
//             />
//            </div>

//            <div>
//            <TableContainer component={Paper} sx={{width:'90%', maxWidth: '1200px', margin:'auto', marginTop:'3rem',marginBottom:' 3rem' }}>
//       <Table aria-label="modern table">
//         <TableHead>
//           <TableRow sx={{ backgroundColor: '#0bafec' }}>
//             <TableCell sx={{width:'120px'}}><b>Issue Date</b></TableCell>
//             <TableCell><b>Department</b></TableCell>
//             <TableCell><b>Headline</b></TableCell>
//             <TableCell><b>Description</b></TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row, index) => (
//             <TableRow key={index}>
//               <TableCell >{row.issueDate}</TableCell>
//               <TableCell>{row.department}</TableCell>
//               <TableCell>{row.headline}</TableCell>
//               <TableCell>
//                 <Link href={row.description.url} target="_blank" rel="noopener noreferrer" underline="none">
//                   {row.description.text}
//                 </Link>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//            </div>
//         </div>
//         <div>
//             <Footer/>
//         </div>
//        </div>
//     </>
//   )
// }

// export default OfficeOrder;


import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link, Box, Typography
} from '@mui/material';
import NavigationBar from '../../components/NavigationBar';
import HeaderBox from './Header';
import Footer from '../../components/Footer';
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg';
import axios from 'axios';

function OfficeOrder() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch office orders from the API
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/officeOrder/getAll');
        if (response.data.success) {
          setOrders(response.data.data);
        } else {
          setError('Failed to fetch office orders.');
        }
      } catch (error) {
        setError('Error fetching office orders.');
        console.error('Error fetching office orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Notices', href: '#' },
    { label: 'Office Orders' }
  ];

  return (
    <>
      <div className="officeOrderContainer">
        <NavigationBar />
        <HeaderBox
          backgroundImage={backgroundImage}
          title="Office Orders"
          breadcrumbs={breadcrumbs}
        />
        <Box p={4}>
          <TableContainer component={Paper} sx={{ width: '90%', maxWidth: '1200px', margin: 'auto', marginTop: '3rem', marginBottom: '3rem' }}>
            <Table aria-label="office orders table">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#0bafec' }}>
                  <TableCell sx={{ width: '120px' }}><b>Issue Date</b></TableCell>
                  <TableCell><b>Department</b></TableCell>
                  <TableCell><b>Headline</b></TableCell>
                  <TableCell><b>Description</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell>{new Date(order.Publishing_Date).toLocaleDateString()}</TableCell>
                    <TableCell>{order.Department}</TableCell>
                    <TableCell>{order.Order_Title}</TableCell>
                    <TableCell>
                      {/* Update the Link to open the document from the backend public directory */}
                      <Link href={`http://localhost:8000/${order.Document}`} target="_blank" rel="noopener noreferrer" underline="none">
                        {order.Description}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Footer />
      </div>
    </>
  );
}

export default OfficeOrder;
