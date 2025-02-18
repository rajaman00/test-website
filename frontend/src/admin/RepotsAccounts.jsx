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

function ReportsAccounts() {
  const [tabIndex, setTabIndex] = useState(0);
  const [reportTitle, setReportTitle] = useState('');
  const [reportImage, setReportImage] = useState(null);
  const [reportPdf, setReportPdf] = useState(null);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [isSubmitDialogOpen, setIsSubmitDialogOpen] = useState(false);
  const [submitEvent, setSubmitEvent] = useState(null);

  const [reportsList, setReportsList] = useState([]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // State for edit mode
  const [editingReport, setEditingReport] = useState(null);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setReportImage(selectedFile);
      setIsUploadDialogOpen(true);
    }
  };

  const handlePdfUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setReportPdf(selectedFile);
      setIsUploadDialogOpen(true);
    }
  };

  const handleUploadConfirmation = (confirmed) => {
    if (confirmed) {
      console.log('Report Image:', reportImage?.name);
      console.log('Report PDF:', reportPdf?.name);
    } else {
      setReportImage(null);
      setReportPdf(null);
    }
    setIsUploadDialogOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitEvent(event);
    setIsSubmitDialogOpen(true);
  };

  const handleSubmitConfirmation = (confirmed) => {
    if (confirmed && submitEvent) {
      if (editingReport) {
        // Update existing report
        setReportsList((prev) =>
          prev.map((report) =>
            report.id === editingReport.id
              ? {
                  ...report,
                  title: reportTitle,
                  imageFile: reportImage?.name || report.imageFile,
                  pdfFile: reportPdf?.name || report.pdfFile,
                }
              : report
          )
        );
        setEditingReport(null); // exit edit mode
      } else {
        // Add new report
        const newReport = {
          id: Date.now(),
          title: reportTitle,
          imageFile: reportImage?.name || 'No Image Uploaded',
          pdfFile: reportPdf?.name || 'No PDF Uploaded',
        };
        setReportsList((prev) => [...prev, newReport]);
      }

      // Reset form fields
      setReportTitle('');
      setReportImage(null);
      setReportPdf(null);
    }
    setIsSubmitDialogOpen(false);
    setSubmitEvent(null);
  };

  const handleEdit = (report) => {
    setEditingReport(report);
    setReportTitle(report.title);
    // Reset file inputs to let user re-select if needed
    setReportImage(null);
    setReportPdf(null);
    setTabIndex(0); // switch to "Add Report" tab
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this report?')) {
      setReportsList((prev) => {
        const updatedList = prev.filter((report) => report.id !== id);
        // Adjust current page if the last item on the page is deleted
        if (updatedList.length <= (currentPage - 1) * itemsPerPage && currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
        return updatedList;
      });
    }
  };

  // Pagination logic
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const paginatedReports = reportsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Optional: A reset function to clear the form (and cancel edit mode)
  const handleReset = () => {
    setReportTitle('');
    setReportImage(null);
    setReportPdf(null);
    setEditingReport(null);
  };

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
                  aria-label="Reports and Accounts Tabs"
                  textColor="primary"
                  indicatorColor="primary"
                  centered
                  sx={{ '& .MuiTab-root': { fontSize: '0.9rem', fontWeight: 500 } }}
                >
                  <Tab label="Add Report" />
                  <Tab label="View Reports" />
                </Tabs>
              </Box>

              <Box p={3}>
                {tabIndex === 0 && (
                  <form onSubmit={handleSubmit}>
                    <Typography variant="h6" gutterBottom>
                      {editingReport ? 'Edit Report' : 'Add Report'}
                    </Typography>
                    <Grid container spacing={2}>
                      {/* Report Title Input */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Report Title"
                          value={reportTitle}
                          onChange={(e) => setReportTitle(e.target.value)}
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
                          Upload Image
                          <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </Button>
                        {reportImage && (
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            Selected Image: {reportImage.name}
                          </Typography>
                        )}
                      </Grid>

                      {/* PDF Upload */}
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
                          Upload PDF
                          <input
                            type="file"
                            hidden
                            accept="application/pdf"
                            onChange={handlePdfUpload}
                          />
                        </Button>
                        {reportPdf && (
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            Selected PDF: {reportPdf.name}
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
                        {editingReport ? 'Update' : 'Submit'}
                      </Button>
                      <Button variant="outlined" color="secondary" onClick={handleReset}>
                        Reset
                      </Button>
                    </Box>
                  </form>
                )}
                {tabIndex === 1 && (
                  <Box p={3}>
                    <Typography variant="h6" gutterBottom>
                      Reports List
                    </Typography>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Sl. No.</TableCell>
                          <TableCell>Report Title</TableCell>
                          <TableCell>Image File</TableCell>
                          <TableCell>PDF File</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {paginatedReports.map((report, index) => (
                          <TableRow key={report.id}>
                            <TableCell>
                              {(currentPage - 1) * itemsPerPage + index + 1}
                            </TableCell>
                            <TableCell>{report.title}</TableCell>
                            <TableCell>{report.imageFile}</TableCell>
                            <TableCell>{report.pdfFile}</TableCell>
                            <TableCell>
                              <IconButton
                                color="primary"
                                onClick={() => handleEdit(report)}
                              >
                                <Edit />
                              </IconButton>
                              <IconButton
                                color="secondary"
                                onClick={() => handleDelete(report.id)}
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
                        count={Math.ceil(reportsList.length / itemsPerPage)}
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
      <Dialog
        open={isUploadDialogOpen}
        onClose={() => handleUploadConfirmation(false)}
      >
        <DialogTitle>Confirm Upload</DialogTitle>
        <DialogContent>
          <Typography>Do you want to upload the selected files?</Typography>
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
      <Dialog
        open={isSubmitDialogOpen}
        onClose={() => handleSubmitConfirmation(false)}
      >
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

export default ReportsAccounts;
