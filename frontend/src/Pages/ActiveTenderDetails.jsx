import React, { useEffect, useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow, Paper, IconButton, Link as MuiLink } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams } from "react-router-dom";
import HeaderBox from './Header';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ActiveTenderDetails = () => {
  const { tenderId } = useParams(); // Get tenderId from the URL
  const [tenderDetails, setTenderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch tender details based on the tenderId from the URL
    const fetchTenderDetails = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get(`/api/v1/tender/active`);
        if (response.data.success) {
          // Find the tender by tenderId from the API response
          const tender = response.data.data.find(tender => tender._id === tenderId);
          if (tender) {
            setTenderDetails(tender); // Set the found tender details
          } else {
            setError("Tender not found.");
          }
        } else {
          setError("Failed to fetch tenders.");
        }
      } catch (error) {
        setError("Error fetching tender details.");
        console.error("Error fetching tender details:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchTenderDetails();
  }, [tenderId]); // Trigger fetch when tenderId changes

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Procurements', href: '#' },
    { label: 'Tenders' },
    { label: 'Active Tenders' },
    { label: 'View Active Tenders' }
  ];

  const details = [
    { label: "Head Line", value: tenderDetails.HeadLine, color: "red" },
    { label: "Description", value: tenderDetails.Description, color: "red" },
    { label: "Alias Name", value: tenderDetails.Alias_Name1, color: "blue", isLink: true, linkTo: `/tender/document/${tenderDetails._id}` },
    { label: "Closing Date", value: tenderDetails.Closing_Date, color: "red" },
    { label: "Publishing Date", value: tenderDetails.Publishing_Date, color: "red" },
  ];

  return (
    <>
      <NavigationBar />
      <HeaderBox
        backgroundImage={backgroundImage}
        title="View Active Tenders"
        breadcrumbs={breadcrumbs}
      />
      <Box p={4} bgcolor="#f9f9f9">
        <Box display="flex" alignItems="center" mb={3}>
          <IconButton>
            <Link to='/active-tenders'>
              <ArrowBackIcon color="primary" />
            </Link>
          </IconButton>
          <Typography variant="h5" ml={2}>
            Active Tender Details
          </Typography>
        </Box>
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableBody>
              {details.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Typography variant="body1" fontWeight="bold">
                      {detail.label}
                    </Typography>
                  </TableCell>
                  <TableCell>:</TableCell>
                  <TableCell>
                    {detail.isLink ? (
                      <MuiLink component={Link} to={detail.linkTo}>
                        <Typography variant="body1" color={detail.color || "textPrimary"}>{detail.value || "-"}</Typography>
                      </MuiLink>
                    ) : (
                      <Typography variant="body1" color={detail.color || "textPrimary"}>
                        {detail.value || "-"}
                      </Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Footer />
    </>
  );
};

export default ActiveTenderDetails;
