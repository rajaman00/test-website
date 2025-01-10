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
} from '@mui/material';
import SidebarMenu from './Components/SideBarMenu';
import AdminHeader from './Components/AdminHeader';
import { Edit, Delete } from '@mui/icons-material';

function MapDetails() {
  const [tabIndex, setTabIndex] = useState(0);
  const [mapDetails, setMapDetails] = useState([]);
  const [editDetail, setEditDetail] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedZone, setSelectedZone] = useState('');
  const [districtOptions, setDistrictOptions] = useState([]);

  const zoneDistrictMapping = {
    'Zone 1': ['District A1', 'District B1', 'District C1'],
    'Zone 2': ['District A2', 'District B2', 'District C2'],
    'Zone 3': ['District A3', 'District B3', 'District C3'],
    'Zone 4': ['District A4', 'District B4', 'District C4'],
    'Zone 5': ['District A5', 'District B5', 'District C5'],
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleZoneChange = (event) => {
    const zone = event.target.value;
    setSelectedZone(zone);
    setDistrictOptions(zoneDistrictMapping[zone] || []);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newDetail = {
      id: Date.now(),
      zone: event.target.zone.value,
      districtName: event.target.districtName.value,
      transmissionLine: event.target.transmissionLine.value,
      opticalFiber: event.target.opticalFiber.value,
      gridSubstation: event.target.gridSubstation.value,
      transformerCapacity: event.target.transformerCapacity.value,
      systemAvailability: event.target.systemAvailability.value,
    };

    setMapDetails((prev) => [...prev, newDetail]);
    event.target.reset();
    setSelectedZone('');
    setDistrictOptions([]);
  };

  const handleEdit = (detail) => {
    setEditDetail(detail);
    setIsDialogOpen(true);
    setSelectedZone(detail.zone);
    setDistrictOptions(zoneDistrictMapping[detail.zone] || []);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      setMapDetails((prev) => prev.filter((detail) => detail.id !== id));
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditDetail(null);
  };

  const handleDialogSubmit = () => {
    setMapDetails((prev) =>
      prev.map((detail) =>
        detail.id === editDetail.id ? { ...editDetail } : detail
      )
    );
    handleDialogClose();
  };

  const handleEditChange = (field, value) => {
    setEditDetail((prev) => ({ ...prev, [field]: value }));
    if (field === 'zone') {
      setDistrictOptions(zoneDistrictMapping[value] || []);
    }
  };

  return (
    <>
      <AdminHeader />
      <Grid container>
        <Grid item  sx={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
          <SidebarMenu />
        </Grid>
        <Grid item xs={9.5}>
          <Box sx={{ width: '100%', padding: 0 }}>
            <Paper elevation={3} sx={{ borderRadius: '12px' }}>
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
                  aria-label="Map Details Tabs"
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
                      Add Map Details
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          select
                          name="zone"
                          label="Zone"
                          variant="outlined"
                          size="small"
                          value={selectedZone}
                          onChange={handleZoneChange}
                          SelectProps={{ native: true }}
                        >
                          <option value="" disabled>
                            Select Zone
                          </option>
                          {Object.keys(zoneDistrictMapping).map((zone) => (
                            <option key={zone} value={zone}>
                              {zone}
                            </option>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          select
                          name="districtName"
                          label="District Name"
                          variant="outlined"
                          size="small"
                          SelectProps={{ native: true }}
                          disabled={!selectedZone}
                        >
                          <option value="" disabled>
                            Select District
                          </option>
                          {districtOptions.map((district) => (
                            <option key={district} value={district}>
                              {district}
                            </option>
                          ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="transmissionLine"
                          label="Transmission Line"
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="opticalFiber"
                          label="Optical Fiber"
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="gridSubstation"
                          label="Grid Substation"
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="transformerCapacity"
                          label="Transformer Capacity"
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          name="systemAvailability"
                          label="System Availability"
                          variant="outlined"
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
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      View Map Details
                    </Typography>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Sl. No.</TableCell>
                          <TableCell>Zone</TableCell>
                          <TableCell>District Name</TableCell>
                          <TableCell>Transmission Line</TableCell>
                          <TableCell>Optical Fiber</TableCell>
                          <TableCell>Grid Substation</TableCell>
                          <TableCell>Transformer Capacity</TableCell>
                          <TableCell>System Availability</TableCell>
                          <TableCell>Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {mapDetails.map((detail, index) => (
                          <TableRow key={detail.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{detail.zone}</TableCell>
                            <TableCell>{detail.districtName}</TableCell>
                            <TableCell>{detail.transmissionLine}</TableCell>
                            <TableCell>{detail.opticalFiber}</TableCell>
                            <TableCell>{detail.gridSubstation}</TableCell>
                            <TableCell>{detail.transformerCapacity}</TableCell>
                            <TableCell>{detail.systemAvailability}</TableCell>
                            <TableCell>
                              <IconButton
                                color="primary"
                                onClick={() => handleEdit(detail)}
                              >
                                <Edit />
                              </IconButton>
                              <IconButton
                                color="secondary"
                                onClick={() => handleDelete(detail.id)}
                              >
                                <Delete />
                              </IconButton>
                            </TableCell>
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

      {/* Edit Dialog */}
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Edit Map Details</DialogTitle>
        <DialogContent>
          {editDetail && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  select
                  label="Zone"
                  value={editDetail.zone}
                  onChange={(e) => handleEditChange('zone', e.target.value)}
                  SelectProps={{ native: true }}
                >
                  <option value="" disabled>
                    Select Zone
                  </option>
                  {Object.keys(zoneDistrictMapping).map((zone) => (
                    <option key={zone} value={zone}>
                      {zone}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  select
                  label="District Name"
                  value={editDetail.districtName}
                  onChange={(e) => handleEditChange('districtName', e.target.value)}
                  SelectProps={{ native: true }}
                >
                  <option value="" disabled>
                    Select District
                  </option>
                  {districtOptions.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </TextField>
              </Grid>
              {/* Other fields */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Transmission Line"
                  value={editDetail.transmissionLine}
                  onChange={(e) =>
                    handleEditChange('transmissionLine', e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Optical Fiber"
                  value={editDetail.opticalFiber}
                  onChange={(e) => handleEditChange('opticalFiber', e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Grid Substation"
                  value={editDetail.gridSubstation}
                  onChange={(e) =>
                    handleEditChange('gridSubstation', e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Transformer Capacity"
                  value={editDetail.transformerCapacity}
                  onChange={(e) =>
                    handleEditChange('transformerCapacity', e.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="System Availability"
                  value={editDetail.systemAvailability}
                  onChange={(e) =>
                    handleEditChange('systemAvailability', e.target.value)
                  }
                />
              </Grid>
            </Grid>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDialogSubmit} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default MapDetails;
