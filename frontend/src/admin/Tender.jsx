import React, { useState, useEffect } from 'react';
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
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import SidebarMenu from './Components/SideBarMenu';
import AdminHeader from './Components/AdminHeader';
import { Edit, Delete } from '@mui/icons-material';

function Tender() {
  const [tabIndex, setTabIndex] = useState(0);
  const [closingDate, setClosingDate] = useState(null);
  const [closingTime, setClosingTime] = useState('');
  const [publicationDate, setPublicationDate] = useState(null);
  const [publicationTime, setPublicationTime] = useState('');
  const [file, setFile] = useState(null);
  const [documentName, setDocumentName] = useState(''); // To display the uploaded document name
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false); // For upload confirmation
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false); // For submit confirmation
  const [submitEvent, setSubmitEvent] = useState(null); // Store the submit event

  const [tenders, setTenders] = useState([]);
  const [archivedTenders, setArchivedTenders] = useState([]);
  const [editTender, setEditTender] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setIsUploadDialogOpen(true); // Open upload confirmation dialog
    }
  };

  const handleUploadConfirmation = (confirmed) => {
    if (confirmed) {
      setDocumentName(file.name); // Set the document name if confirmed
    } else {
      setFile(null); // Clear the file if not confirmed
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
      const formattedClosingDate = closingDate
        ? dayjs(`${closingDate.format('YYYY-MM-DD')}T${closingTime}`).toISOString()
        : null;
      const formattedPublicationDate = publicationDate
        ? dayjs(`${publicationDate.format('YYYY-MM-DD')}T${publicationTime}`).toISOString()
        : null;

      const newTender = {
        id: Date.now(), // Simulating unique ID
        headline: submitEvent.target.headline.value,
        closingDate: formattedClosingDate,
        publicationDate: formattedPublicationDate,
        aliasName: submitEvent.target.aliasName.value,
        details: submitEvent.target.details.value,
        document: documentName || '', // Use the confirmed document name
      };

      setTenders((prev) => [...prev, newTender]);

      // Reset form fields
      submitEvent.target.reset();
      setClosingDate(null);
      setClosingTime('');
      setPublicationDate(null);
      setPublicationTime('');
      setFile(null);
      setDocumentName('');
    }
    setIsSubmitDialogOpen(false); // Close the dialog
    setSubmitEvent(null); // Clear the stored event
  };

  // Auto-move expired tenders to archive
  useEffect(() => {
    const now = dayjs();
    const expiredTenders = tenders.filter((tender) =>
      dayjs(tender.closingDate).isBefore(now)
    );
    if (expiredTenders.length > 0) {
      setArchivedTenders((prev) => [...prev, ...expiredTenders]);
      setTenders((prev) =>
        prev.filter((tender) => !expiredTenders.includes(tender))
      );
    }
  }, [tenders]);

  const handleEdit = (tender) => {
    setEditTender(tender);
    setIsDialogOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this tender?')) {
      setTenders((prev) => prev.filter((tender) => tender.id !== id));
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditTender(null);
  };

  const handleDialogSubmit = () => {
    setTenders((prev) =>
      prev.map((tender) =>
        tender.id === editTender.id ? { ...editTender } : tender
      )
    );
    handleDialogClose();
  };

  const handleEditChange = (field, value) => {
    setEditTender((prev) => ({ ...prev, [field]: value }));
  };

  // Pagination logic
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const paginatedTenders = tenders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <AdminHeader />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                    aria-label="NIT/RFP Tabs"
                    textColor="primary"
                    indicatorColor="primary"
                    centered
                    sx={{ '& .MuiTab-root': { fontSize: '0.9rem', fontWeight: 500 } }}
                  >
                    <Tab label="Add" />
                    <Tab label="View" />
                    <Tab label="Archive" />
                  </Tabs>
                </Box>

                <Box p={3}>
                  {tabIndex === 0 && (
                    <form onSubmit={handleSubmit}>
                      <Typography variant="h6" gutterBottom>
                        Add NIT/RFP
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            name="headline"
                            label="Headline"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <DatePicker
                            label="Closing Date"
                            value={closingDate}
                            onChange={(newValue) => setClosingDate(newValue)}
                            renderInput={(params) => (
                              <TextField {...params} fullWidth variant="outlined" size="small" />
                            )}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            label="Closing Time"
                            type="time"
                            value={closingTime}
                            onChange={(e) => setClosingTime(e.target.value)}
                            fullWidth
                            size="small"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <DatePicker
                            label="Publication Date"
                            value={publicationDate}
                            onChange={(newValue) => setPublicationDate(newValue)}
                            renderInput={(params) => (
                              <TextField {...params} fullWidth variant="outlined" size="small" />
                            )}
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            label="Publication Time"
                            type="time"
                            value={publicationTime}
                            onChange={(e) => setPublicationTime(e.target.value)}
                            fullWidth
                            size="small"
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                          />
                        </Grid>
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
                            Upload Document
                            <input type="file" hidden onChange={handleFileChange} />
                          </Button>
                          {documentName && (
                            <Typography variant="body2" sx={{ mt: 1 }}>
                              Uploaded Document: {documentName}
                            </Typography>
                          )}
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            name="aliasName"
                            label="Alias Name"
                            variant="outlined"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            name="details"
                            label="Details"
                            variant="outlined"
                            multiline
                            rows={4}
                            size="small"
                          />
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
                        Uploaded Tenders
                      </Typography>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Sl. No.</TableCell>
                            <TableCell>Headline</TableCell>
                            <TableCell>Document Name</TableCell>
                            <TableCell>Publishing Date</TableCell>
                            <TableCell>Closing Date</TableCell>
                            <TableCell>Actions</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {paginatedTenders.map((tender, index) => (
                            <TableRow key={tender.id}>
                              <TableCell>{(currentPage - 1) * itemsPerPage + index + 1}</TableCell>
                              <TableCell>{tender.headline}</TableCell>
                              <TableCell>{tender.document || 'N/A'}</TableCell>
                              <TableCell>
                                {tender.publicationDate
                                  ? dayjs(tender.publicationDate).format('DD/MM/YYYY HH:mm')
                                  : 'N/A'}
                              </TableCell>
                              <TableCell>
                                {tender.closingDate
                                  ? dayjs(tender.closingDate).format('DD/MM/YYYY HH:mm')
                                  : 'N/A'}
                              </TableCell>
                              <TableCell>
                                <IconButton color="primary" onClick={() => handleEdit(tender)}>
                                  <Edit />
                                </IconButton>
                                <IconButton
                                  color="secondary"
                                  onClick={() => handleDelete(tender.id)}
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
                          count={Math.ceil(tenders.length / itemsPerPage)}
                          page={currentPage}
                          onChange={handlePageChange}
                          color="primary"
                        />
                      </Box>
                    </Box>
                  )}
                  {tabIndex === 2 && (
                    <Box p={3}>
                      <Typography variant="h6" gutterBottom>
                        Archived Tenders
                      </Typography>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Headline</TableCell>
                            <TableCell>Closing Date</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {archivedTenders.map((tender) => (
                            <TableRow key={tender.id}>
                              <TableCell>{tender.id}</TableCell>
                              <TableCell>{tender.headline}</TableCell>
                              <TableCell>{dayjs(tender.closingDate).format('DD/MM/YYYY HH:mm')}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  )}
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </LocalizationProvider>

      {/* Edit Dialog */}
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Edit Tender</DialogTitle>
        <DialogContent>
          {editTender && (
            <>
              <TextField
                fullWidth
                label="Headline"
                value={editTender.headline}
                onChange={(e) => handleEditChange('headline', e.target.value)}
                margin="normal"
              />
              {/* Add other fields as needed */}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDialogSubmit} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Upload Confirmation Dialog */}
      <Dialog open={isUploadDialogOpen} onClose={() => handleUploadConfirmation(false)}>
        <DialogTitle>Confirm Upload</DialogTitle>
        <DialogContent>
          <Typography>Do you want to upload {file?.name}?</Typography>
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

export default Tender;