import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
} from "@mui/material";
import NavigationBar from '../../components/NavigationBar'
import HeaderBox from './Header';
import Footer from '../../components/Footer'
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'

const data = {
  headquarters: [
    { name: "Satyanarayan Kumar", mobile: "7763817733", designation: "General Manager", priority: 1 },
    { name: "Manish Kumar Sharma", mobile: "9262696712", designation: "Assistant Manager", priority: 2 },
  ],
  zones: {
    Patna: {
      employees: [
        { name: "Shiva Shankar Pandey", mobile: "7033091495", designation: "Senior Engineer", priority: 2 },
        { name: "Shweta Priya", mobile: "7763817812", designation: "Chief Engineer", priority: 1 },
      ],
      circles: {
        "Patna East": [
          { name: "Anila Kumari", mobile: "7763817939", designation: "Junior Engineer", priority: 3 },
        ],
        "Patna West": [
          { name: "Mukesh Kumar", mobile: "9262991475", designation: "Executive Engineer", priority: 1 },
        ],
      },
    },
    Muzaffarpur: {
      employees: [{ name: "Anant Deo Sharan", mobile: "7979948789", designation: "Regional Officer", priority: 1 }],
      circles: {
        "Muzaffarpur City": [
          { name: "Rajesh Kumar", mobile: "9876543210", designation: "Field Supervisor", priority: 2 },
        ],
      },
    },
  },
};

const PhoneDirectory = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedCircle, setSelectedCircle] = useState("");

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setSelectedZone("");
    setSelectedCircle("");
  };

  const handleZoneChange = (e) => {
    setSelectedZone(e.target.value);
    setSelectedCircle("");
  };

  const handleCircleChange = (e) => {
    setSelectedCircle(e.target.value);
  };

  const renderEmployees = () => {
    let employees = [];
    if (selectedType === "headquarters") {
      employees = data.headquarters;
    } else if (selectedZone && selectedCircle) {
      employees = data.zones[selectedZone]?.circles[selectedCircle] || [];
    } else if (selectedZone) {
      employees = data.zones[selectedZone]?.employees || [];
    }
    return employees.sort((a, b) => a.priority - b.priority); // Sort by priority (lower number = higher priority)
  };

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Notices', href: '#' },
    { label: 'Notifications' }
  ];

  return (
    <>
      <NavigationBar/>
      <HeaderBox
                backgroundImage={backgroundImage}
                title="Circulars"
                breadcrumbs={breadcrumbs}
            />
    <Box sx={{ maxWidth: 800, mx: "auto", p: 4, mt: 5, bgcolor: "#f9f9f9", borderRadius: 4, boxShadow: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", mb: 4, color: "#1976d2" }}>
        Phone Directory
      </Typography>

      {/* Type Selection */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="type-select-label">Select Type</InputLabel>
        <Select
          labelId="type-select-label"
          value={selectedType}
          onChange={handleTypeChange}
          label="Select Type"
        >
          <MenuItem value="headquarters">Headquarters</MenuItem>
          <MenuItem value="zone">Zone</MenuItem>
        </Select>
      </FormControl>

      {/* Zone Selection */}
      {selectedType === "zone" && (
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="zone-select-label">Select Zone</InputLabel>
          <Select
            labelId="zone-select-label"
            value={selectedZone}
            onChange={handleZoneChange}
            label="Select Zone"
          >
            {Object.keys(data.zones).map((zone) => (
              <MenuItem key={zone} value={zone}>
                {zone}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Circle Selection */}
      {selectedZone && data.zones[selectedZone]?.circles && (
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="circle-select-label">Select Circle</InputLabel>
          <Select
            labelId="circle-select-label"
            value={selectedCircle}
            onChange={handleCircleChange}
            label="Select Circle"
          >
            {Object.keys(data.zones[selectedZone].circles).map((circle) => (
              <MenuItem key={circle} value={circle}>
                {circle}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {/* Employee Table */}
      <TableContainer component={Paper} sx={{ mt: 3, borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#1976d2" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Designation</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Mobile</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderEmployees().map((emp, index) => (
              <TableRow key={index} hover sx={{ "&:nth-of-type(odd)": { bgcolor: "#f5f5f5" } }}>
                <TableCell>{emp.name}</TableCell>
                <TableCell>{emp.designation}</TableCell>
                <TableCell>{emp.mobile}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    <Footer/>
    </>
  );
};

export default PhoneDirectory;