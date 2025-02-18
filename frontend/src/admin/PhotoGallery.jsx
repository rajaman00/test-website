import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Pagination,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import SidebarMenu from './Components/SideBarMenu';
import AdminHeader from './Components/AdminHeader';

function PhotoGallery() {
  const [tabIndex, setTabIndex] = useState(0);
  const [heading, setHeading] = useState(''); // For heading input
  const [imageFiles, setImageFiles] = useState([]); // For multiple image uploads
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false); // For upload confirmation
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false); // For submit confirmation
  const [submitEvent, setSubmitEvent] = useState(null); // Store the submit event

  const [galleryItems, setGalleryItems] = useState([]); // To store gallery items

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleImageUpload = (event) => {
    const selectedFiles = Array.from(event.target.files); // Convert FileList to array
    if (selectedFiles.length > 0) {
      setImageFiles(selectedFiles);
      setIsUploadDialogOpen(true); // Open upload confirmation dialog
    }
  };

  const handleUploadConfirmation = (confirmed) => {
    if (confirmed) {
      // Handle confirmed upload (e.g., display file names)
      console.log('Selected Images:', imageFiles.map(file => file.name));
    } else {
      setImageFiles([]); // Clear the image files if not confirmed
    }
    setIsUploadDialogOpen(false); // Close the dialog
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitEvent(event); // Store the event
    setIsSubmitDialogOpen(true); // Open submit confirmation dialog
  };

  const handleSubmitConfirmation = (confirmed) => {
    if (confirmed && submitEvent) {
      const newGalleryItem = {
        id: Date.now(), // Simulating unique ID
        heading: heading,
        imageFiles: imageFiles.map(file => file.name), // Store image file names
      };

      setGalleryItems((prev) => [...prev, newGalleryItem]);

      // Reset form fields
      setHeading('');
      setImageFiles([]);
    }
    setIsSubmitDialogOpen(false); // Close the dialog
    setSubmitEvent(null); // Clear the stored event
  };

  const handleEdit = (item) => {
    // Implement edit functionality if needed
    console.log('Edit item:', item);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setGalleryItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Pagination logic
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const paginatedGalleryItems = galleryItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <AdminHeader />
      <Grid container>
        <Grid item xs={2.5} sx={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
          <SidebarMenu />
        </Grid>
        <Grid item xs={9.5}>
          <Box sx={{ width: '100%', padding: 0 }}>
            <Paper sx={{ borderRadius: '12px' }}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  backgroundColor: '#fafafa',
                  padding: 2,
                }}
              >
                <Tabs
                  value={tabIndex}
                  onChange={handleTabChange}
                  aria-label="Photo Gallery Tabs"
                  textColor="primary"
                  indicatorColor="primary"
                  centered
                  sx={{ '& .MuiTab-root': { fontSize: '0.9rem', fontWeight: 500 } }}
                >
                  <Tab label="Add" />
                  <Tab label="View" />
                </Tabs>
              </Box>

              <Box p={3}>
                {tabIndex === 0 && (
                  <form onSubmit={handleSubmit}>
                    <Typography variant="h6" gutterBottom>
                      Add Photo Gallery Item
                    </Typography>
                    <Grid container spacing={2}>
                      {/* Heading Input */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Heading"
                          value={heading}
                          onChange={(e) => setHeading(e.target.value)}
                          variant="outlined"
                          size="small"
                        />
                      </Grid>

                      {/* Image Upload */}
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          component="label"
                          sx={{
                            backgroundColor: '#2196f3',
                            color: '#fff',
                            '&:hover': { backgroundColor: '#1976d2' },
                          }}
                        >
                          Upload Images
                          <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={handleImageUpload}
                            multiple // Allow multiple file selection
                          />
                        </Button>
                        {imageFiles.length > 0 && (
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            Selected Images: {imageFiles.map(file => file.name).join(', ')}
                          </Typography>
                        )}
                      </Grid>
                    </Grid>
                    <Box mt={3}>
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          marginRight: 2,
                          backgroundColor: '#2196f3',
                          '&:hover': { backgroundColor: '#1976d2' },
                        }}
                      >
                        Submit
                      </Button>
                      <Button variant="outlined" color="secondary">
                        Reset
                      </Button>
                    </Box>
                  </form>
                )}
                {tabIndex === 1 && (
                  <Box p={3}>
                    <Typography variant="h6" gutterBottom>
                      Gallery Items
                    </Typography>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Sl. No.</TableCell>
                          <TableCell>Heading</TableCell>
                          <TableCell>Image Files</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {paginatedGalleryItems.map((item, index) => (
                          <TableRow key={item.id}>
                            <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                            <TableCell>{item.heading}</TableCell>
                            <TableCell>
                              {item.imageFiles.join(', ')} {/* Display all image file names */}
                            </TableCell>
                            <TableCell>
                              <IconButton color="primary" onClick={() => handleEdit(item)}>
                                <Edit />
                              </IconButton>
                              <IconButton
                                color="secondary"
                                onClick={() => handleDelete(item.id)}
                              >
                                <Delete />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                      <Pagination
                        count={Math.ceil(galleryItems.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        color="primary"
                      />
                    </Box>
                  </Box>
                )}
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>

      {/* Upload Confirmation Dialog */}
      <Dialog open={isUploadDialogOpen} onClose={() => handleUploadConfirmation(false)}>
        <DialogTitle>Confirm Upload</DialogTitle>
        <DialogContent>
          <Typography>Do you want to upload the selected images?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleUploadConfirmation(false)} color="secondary">
            No
          </Button>
          <Button onClick={() => handleUploadConfirmation(true)} variant="contained" color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Submit Confirmation Dialog */}
      <Dialog open={isSubmitDialogOpen} onClose={() => handleSubmitConfirmation(false)}>
        <DialogTitle>Confirm Submission</DialogTitle>
        <DialogContent>
          <Typography>Do you want to submit the form?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSubmitConfirmation(false)} color="secondary">
            No
          </Button>
          <Button onClick={() => handleSubmitConfirmation(true)} variant="contained" color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PhotoGallery;