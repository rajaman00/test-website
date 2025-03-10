import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  TableContainer,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminHeader from "./Components/AdminHeader";
import SidebarMenu from "./Components/SideBarMenu";
import { Trans } from "react-i18next";

const UpcomingTransmission = () => {
  const [tabValue, setTabValue] = useState(0);
  const [transmissionFiles, setTransmissionFiles] = useState([]);
  const [editTransmissionFile, setEditTransmissionFile] = useState(null);

  const handleTabChange = (event, newValue) => setTabValue(newValue);

  const handleTransmissionFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith(".xlsx")) {
      alert("Excel file uploaded successfully: " + file.name);

      const fileURL = URL.createObjectURL(file);
      const newFile = {
        id: Date.now(),
        name: file.name,
        file,
        fileURL,
      };

      if (editTransmissionFile) {
        setTransmissionFiles(
          transmissionFiles.map((f) =>
            f.id === editTransmissionFile.id ? newFile : f
          )
        );
        alert("File updated successfully");
        setEditTransmissionFile(null);
      } else {
        setTransmissionFiles([...transmissionFiles, newFile]);
        alert("File uploaded successfully");
      }
    } else {
      alert("Please upload a valid Excel (.xlsx) file.");
    }
  };

  const handleDeleteTransmissionFile = (id) => {
    setTransmissionFiles(
      transmissionFiles.filter((file) => file.id !== id)
    );
    alert("File deleted successfully");
  };

  const handleEditTransmissionFile = (file) => {
    setEditTransmissionFile(file);
    setTabValue(0);
  };

  return (
    <>
      <AdminHeader />
      <Grid container>
        <Grid item xs={3}>
          <SidebarMenu />
        </Grid>

        <Grid item xs={9}>
          <Box p={4}>
            <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 4 }}>
              <Tab
                label={
                  editTransmissionFile ? "Edit Transmission" : "Upload Excel"
                }
              />
              <Tab label="View Transmission Files" />
            </Tabs>

            {tabValue === 0 && (
              <Box>
                <Button variant="outlined" component="label" sx={{ mb: 3 }}>
                  {editTransmissionFile
                    ? "Update Excel File"
                    : "Upload Excel File"}
                  <input
                    type="file"
                    hidden
                    accept=".xlsx"
                    onChange={handleTransmissionFileChange}
                  />
                </Button>

                {editTransmissionFile && (
                  <Typography variant="body2">
                    Editing: {editTransmissionFile.name}
                  </Typography>
                )}
              </Box>
            )}

            {tabValue === 1 && (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                      <TableCell>File Name</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transmissionFiles.map((file) => (
                      <TableRow key={file.id}>
                        <TableCell>
                          <a
                            href={file.fileURL}
                            download={file.name}
                            style={{ textDecoration: "none" }}
                          >
                            {file.name}
                          </a>
                        </TableCell>

                        <TableCell>
                          <IconButton
                            color="primary"
                            onClick={() => handleEditTransmissionFile(file)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            color="error"
                            onClick={() =>
                              handleDeleteTransmissionFile(file.id)
                            }
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default UpcomingTransmission;
