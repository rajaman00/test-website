import React, { useState, useEffect } from "react";
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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TableContainer,
  Paper,
  Grid,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminHeader from "./Components/AdminHeader";
import SidebarMenu from "./Components/SideBarMenu";

const AboutImages = () => {
  const [tabValue, setTabValue] = useState(0);
  const [profiles, setProfiles] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    image: null,
    imageName: "",
    imageURL: "",
  });
  const [editProfile, setEditProfile] = useState(null);

  const roles = ["CM", "Energy Minister", "Chairman-Cum-MD", "Managing Director"];

  const handleTabChange = (event, newValue) => setTabValue(newValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert("Image uploaded successfully: " + file.name);

      if (formData.imageURL) {
        URL.revokeObjectURL(formData.imageURL);
      }

      const imageURL = URL.createObjectURL(file);
      setFormData({ ...formData, image: file, imageName: file.name, imageURL });
    }
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.role || !formData.image) {
      alert("All fields are required");
      return;
    }

    const newProfile = {
      ...formData,
      id: Date.now(),
      imageURL: formData.imageURL || URL.createObjectURL(formData.image),
    };

    setProfiles([...profiles, newProfile]);
    alert("Profile uploaded successfully");

    setFormData({ name: "", role: "", image: null, imageName: "", imageURL: "" });
  };

  const handleDelete = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
    alert("Profile deleted successfully");
  };

  const handleEdit = (profile) => {
    setEditProfile(profile);
    setTabValue(0);
  };

  const handleEditSave = () => {
    setProfiles(
      profiles.map((profile) =>
        profile.id === editProfile.id
          ? {
              ...editProfile,
              imageURL: editProfile.imageURL || URL.createObjectURL(editProfile.image),
            }
          : profile
      )
    );
    alert("Profile updated successfully");
    setEditProfile(null);
    setTabValue(1);
  };

  useEffect(() => {
    return () => {
      if (formData.imageURL) {
        URL.revokeObjectURL(formData.imageURL);
      }
    };
  }, [formData.imageURL]);

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
              <Tab label="Add Profile" />
              <Tab label="View Profiles" />
            </Tabs>

            {tabValue === 0 && (
              <Box component="form" noValidate autoComplete="off">
                <TextField
                  label="Name"
                  name="name"
                  value={editProfile ? editProfile.name : formData.name}
                  onChange={(e) =>
                    editProfile
                      ? setEditProfile({ ...editProfile, name: e.target.value })
                      : handleChange(e)
                  }
                  fullWidth
                  required
                  sx={{ mb: 3 }}
                />

                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Role</InputLabel>
                  <Select
                    name="role"
                    value={editProfile ? editProfile.role : formData.role}
                    onChange={(e) =>
                      editProfile
                        ? setEditProfile({ ...editProfile, role: e.target.value })
                        : handleChange(e)
                    }
                    required
                  >
                    {roles.map((role) => (
                      <MenuItem key={role} value={role}>
                        {role}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
                  <Grid item>
                    <Button variant="outlined" component="label">
                      Upload Image
                      <input type="file" hidden onChange={handleImageChange} />
                    </Button>
                    {formData.imageName && (
                      <Typography variant="body2">{formData.imageName}</Typography>
                    )}
                  </Grid>
                  <Grid item xs>
                    <Box display="flex" justifyContent="flex-end">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={editProfile ? handleEditSave : handleSubmit}
                      >
                        {editProfile ? "Save Changes" : "Submit"}
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            )}

            {tabValue === 1 && (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                      <TableCell>Image</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {profiles.map((profile) => (
                      <TableRow key={profile.id}>
                        <TableCell>
                          {profile.imageURL ? (
                            <img
                              src={profile.imageURL}
                              alt={profile.name}
                              width={50}
                              height={50}
                              style={{ borderRadius: "50%" }}
                            />
                          ) : (
                            <Typography variant="body2">No Image</Typography>
                          )}
                        </TableCell>
                        <TableCell>{profile.name}</TableCell>
                        <TableCell>{profile.role}</TableCell>
                        <TableCell>
                          <IconButton color="primary" onClick={() => handleEdit(profile)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton color="error" onClick={() => handleDelete(profile.id)}>
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

export default AboutImages;