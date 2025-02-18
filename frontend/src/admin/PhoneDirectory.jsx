import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Typography,
  Box,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Pagination,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import SidebarMenu from "./Components/SideBarMenu";
import AdminHeader from "./Components/AdminHeader";
import * as XLSX from "xlsx"; // Import xlsx library

const PhoneDirectory = () => {
  const [formData, setFormData] = useState({
    zone: "",
    circle: "",
    name: "",
    designation: "",
    contactNo: "",
    mobileNo: "",
    email: "",
    posting: "",
    serialNo: "",
  });

  const [contacts, setContacts] = useState([]); // State to store added contacts
  const [activeTab, setActiveTab] = useState(0); // State to manage active tab
  const [editIndex, setEditIndex] = useState(null); // State to track the contact being edited

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFormData({
      zone: "",
      circle: "",
      name: "",
      designation: "",
      contactNo: "",
      mobileNo: "",
      email: "",
      posting: "",
      serialNo: "",
    });
    setEditIndex(null); // Reset edit index
  };

  const handleSubmit = () => {
    if (editIndex !== null) {
      // Update existing contact
      const updatedContacts = [...contacts];
      updatedContacts[editIndex] = formData;
      setContacts(updatedContacts);
      setEditIndex(null);
    } else {
      // Add new contact
      setContacts([...contacts, formData]);
    }
    handleReset();
  };

  const handleEdit = (index) => {
    const contactToEdit = contacts[index];
    setFormData(contactToEdit);
    setEditIndex(index);
    setActiveTab(0); // Switch to the "Add Contact" tab
  };

  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Function to export contacts to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(contacts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");
    XLSX.writeFile(workbook, "contacts.xlsx");
  };

  // Pagination logic
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // Calculate the contacts to display for the current page
  const paginatedContacts = contacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <AdminHeader />
      <Box sx={{ display: "flex" }}>
        <SidebarMenu />
        <Box sx={{ ml: 2, flexGrow: 1 }}>
          {/* Tabs for Add Contact and View Contacts */}
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Add Contact" />
            <Tab label="View Contacts" />
          </Tabs>

          {/* Add Contact Tab */}
          {activeTab === 0 && (
            <Box
              sx={{
                maxWidth: 500,
                p: 3,
                border: "1px solid #ccc",
                borderRadius: 2,
                mt: 4,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Add Contact Information
              </Typography>

              <Grid container spacing={2} sx={{ mt: 2 }}>
                {/* Zone */}
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel shrink={!!formData.zone}>Zone</InputLabel>
                    <Select
                      name="zone"
                      value={formData.zone}
                      onChange={handleChange}
                      label="Zone"
                      notched
                    >
                      <MenuItem value="">-Select-</MenuItem>
                      <MenuItem value="North">North</MenuItem>
                      <MenuItem value="South">South</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Circle */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Circle"
                    name="circle"
                    value={formData.circle}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Name */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Designation */}
                <Grid item xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel shrink={!!formData.designation}>
                      Designation
                    </InputLabel>
                    <Select
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      label="Designation"
                      notched
                    >
                      <MenuItem value="">-Select-</MenuItem>
                      <MenuItem value="Manager">Manager</MenuItem>
                      <MenuItem value="Supervisor">Supervisor</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Contact Number */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contact No."
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Mobile Number */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mobile No."
                    name="mobileNo"
                    value={formData.mobileNo}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Email ID */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email ID"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Place of Posting */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Place of Posting"
                    name="posting"
                    value={formData.posting}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Serial No. */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Sl. No."
                    name="serialNo"
                    value={formData.serialNo}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Buttons */}
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "center", gap: 2 }}
                >
                  <Button variant="contained" color="primary" onClick={handleSubmit}>
                    {editIndex !== null ? "Update" : "Submit"}
                  </Button>
                  <Button variant="contained" color="secondary" onClick={handleReset}>
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}

          {/* View Contacts Tab */}
          {activeTab === 1 && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6" fontWeight="bold">
                View Contacts
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={exportToExcel}
                sx={{ mb: 2 }}
              >
                Export to Excel
              </Button>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Designation</TableCell>
                      <TableCell>Contact No.</TableCell>
                      <TableCell>Mobile No.</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {paginatedContacts.map((contact, index) => (
                      <TableRow key={index}>
                        <TableCell>{contact.name}</TableCell>
                        <TableCell>{contact.designation}</TableCell>
                        <TableCell>{contact.contactNo}</TableCell>
                        <TableCell>{contact.mobileNo}</TableCell>
                        <TableCell>{contact.email}</TableCell>
                        <TableCell>
                          <IconButton onClick={() => handleEdit(index + (currentPage - 1) * itemsPerPage)}>
                            <Edit />
                          </IconButton>
                          <IconButton onClick={() => handleDelete(index + (currentPage - 1) * itemsPerPage)}>
                            <Delete />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* Pagination */}
              <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                <Pagination
                  count={Math.ceil(contacts.length / itemsPerPage)}
                  page={currentPage}
                  onChange={handlePageChange}
                  color="primary"
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default PhoneDirectory;