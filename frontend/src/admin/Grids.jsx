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

const Grids = () => {
  const [tabValue, setTabValue] = useState(0);
  const [gridFiles, setGridFiles] = useState([]);
  const [editGridFile, setEditGridFile] = useState(null);

  const handleTabChange = (event, newValue) => setTabValue(newValue);

  const handleGridFileChange = (e) => {
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

      if (editGridFile) {
        setGridFiles(
          gridFiles.map((f) => (f.id === editGridFile.id ? newFile : f))
        );
        alert("File updated successfully");
        setEditGridFile(null);
      } else {
        setGridFiles([...gridFiles, newFile]);
        alert("File uploaded successfully");
      }
    } else {
      alert("Please upload a valid Excel (.xlsx) file.");
    }
  };

  const handleDeleteGridFile = (id) => {
    setGridFiles(gridFiles.filter((file) => file.id !== id));
    alert("File deleted successfully");
  };

  const handleEditGridFile = (file) => {
    setEditGridFile(file);
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
                label={editGridFile ? "Edit Grid" : "Upload Excel"}
              />
              <Tab label="View Grid Files" />
            </Tabs>

            {tabValue === 0 && (
              <Box>
                <Button variant="outlined" component="label" sx={{ mb: 3 }}>
                  {editGridFile ? "Update Excel File" : "Upload Excel File"}
                  <input
                    type="file"
                    hidden
                    accept=".xlsx"
                    onChange={handleGridFileChange}
                  />
                </Button>

                {editGridFile && (
                  <Typography variant="body2">
                    Editing: {editGridFile.name}
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
                    {gridFiles.map((file) => (
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
                            onClick={() => handleEditGridFile(file)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            color="error"
                            onClick={() => handleDeleteGridFile(file.id)}
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

export default Grids;
