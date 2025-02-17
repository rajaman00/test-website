import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Grid,
  Pagination,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminHeader from "./Components/AdminHeader";
import SidebarMenu from "./Components/SideBarMenu";
import * as XLSX from "xlsx"; // Import the xlsx library

const DesignationForm = () => {
  const [tabValue, setTabValue] = useState(0);
  const [designations, setDesignations] = useState([]);
  const [formData, setFormData] = useState({
    designation: "",
    priority: "",
  });
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const itemsPerPage = 10; // Number of items per page

  // Handle tab switch
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!formData.designation || !formData.priority) {
      alert("Please fill all fields.");
      return;
    }

    const newEntry = {
      ...formData,
      priority: parseFloat(formData.priority),
      id: Date.now(),
    };

    setDesignations([...designations, newEntry].sort((a, b) => a.priority - b.priority));
    setFormData({ designation: "", priority: "" });
  };

  // Handle delete
  const handleDelete = (id) => {
    setDesignations(designations.filter((item) => item.id !== id));
  };

  // Handle export to Excel
  const handleExportToExcel = () => {
    // Create a worksheet from the designations data
    const worksheet = XLSX.utils.json_to_sheet(designations);
    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Designations");
    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, "Designations.xlsx");
  };

  // Handle page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(designations.length / itemsPerPage);

  // Get the data for the current page
  const currentData = designations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <AdminHeader />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box sx={{ width: "20%", borderRight: "1px solid #ddd" }}>
          <SidebarMenu />
        </Box>

        <Box sx={{ width: "80%", padding: "20px" }}>
          <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
            Add Designation
          </Typography>

          <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 3 }}>
            <Tab label="Add" />
            <Tab label="View" />
          </Tabs>

          {tabValue === 0 && (
            <Box>
              {/* Input Fields Row */}
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    label="Designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Priority"
                    name="priority"
                    type="number"
                    value={formData.priority}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>

              {/* Buttons Below */}
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sx={{ display: "flex", gap: 2 }}>
                  <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setFormData({ designation: "", priority: "" })}
                  >
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}

          {tabValue === 1 && (
            <Box>
              {/* Export to Excel Button */}
              <Button
                variant="contained"
                color="success"
                onClick={handleExportToExcel}
                sx={{ mb: 2 }}
              >
                Export to Excel
              </Button>

              {/* Table to display designations */}
              <Table>
                <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                  <TableRow>
                    <TableCell><b>Designation</b></TableCell>
                    <TableCell><b>Priority</b></TableCell>
                    <TableCell><b>Actions</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentData.length > 0 ? (
                    currentData.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.designation}</TableCell>
                        <TableCell>{item.priority}</TableCell>
                        <TableCell>
                          <IconButton color="error" onClick={() => handleDelete(item.id)}>
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={3} align="center">
                        No records found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>

              {/* Pagination */}
              {designations.length > itemsPerPage && (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                  />
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default DesignationForm;