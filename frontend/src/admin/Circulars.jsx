// import React, { useState } from "react";
// import {
//   Box,
//   Tabs,
//   Tab,
//   TextField,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   IconButton,
//   Typography,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Grid,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import AdminHeader from "./Components/AdminHeader";
// import SidebarMenu from "./Components/SideBarMenu";

// const Circulars = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const [files, setFiles] = useState([]);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [formData, setFormData] = useState({
//     department: "",
//     headline: "",
//     issueDate: "",
//     details: "",
//     file: null,
//   });
//   const [editFile, setEditFile] = useState(null); // To store the file being edited
//   const [isEditing, setIsEditing] = useState(false); // To open/close the edit dialog
//   const [successDialogOpen, setSuccessDialogOpen] = useState(false); // For success dialog

//   const departments = ["Civil-Engg.", "Comm. Revenue Accounting and Energy Accounting", "CRITL", "Finance and Accounts", "Human Resource and Administration", "I.T.", "Inter State", "Power Management Cell", "Project and Planning", "SLDC", "Store and Material", "STU", "Telecom", "Training", "Transmission(O and M)", "ULDC"]; // departments

//   // Handle tab switch
//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle file change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, file });
//   };

//   // Submit form
//   const handleSubmit = () => {
//     if (!formData.file) {
//       alert("Please upload a document before submitting.");
//       return;
//     }

//     const confirmSubmission = window.confirm("Are you sure you want to submit this data?");
//     if (confirmSubmission) {
//       const newFile = {
//         ...formData,
//         id: Date.now(),
//       };
//       setFiles([...files, newFile]);
//       setFormData({
//         department: "",
//         headline: "",
//         issueDate: "",
//         details: "",
//         file: null,
//       });

//       // Open the success dialog
//       setSuccessDialogOpen(true);
//     }
//   };

//   const handleSuccessDialogClose = () => {
//     setSuccessDialogOpen(false);
//   };


//   // Handle delete with confirmation prompt
//   const handleDelete = (id) => {
//     const confirmDeletion = window.confirm("Are you sure you want to delete this file?");
//     if (confirmDeletion) {
//       setFiles(files.filter((file) => file.id !== id));
//     }
//   };


//   // Open edit dialog
//   const handleEdit = (file) => {
//     setEditFile({ ...file });
//     setIsEditing(true);
//   };

//   // Handle edit input change
//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditFile((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle edit file change
//   const handleEditFileChange = (e) => {
//     const file = e.target.files[0];
//     setEditFile((prev) => ({ ...prev, file, fileName: file?.name }));
//   };

//   // Save edited file
//   const handleEditSave = () => {
//     setFiles((prevFiles) =>
//       prevFiles.map((file) => (file.id === editFile.id ? editFile : file))
//     );
//     setIsEditing(false);
//     setEditFile(null);
//   };

//   // Close edit dialog
//   const handleEditCancel = () => {
//     setIsEditing(false);
//     setEditFile(null);
//   };


// import React, { useState } from "react";
// import {
//   Box,
//   Tabs,
//   Tab,
//   TextField,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   IconButton,
//   Typography,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Grid,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
// import AdminHeader from "./Components/AdminHeader";
// import SidebarMenu from "./Components/SideBarMenu";
// import axios from "axios"; // Add axios for API calls

// const Circulars = () => {
//   const [tabValue, setTabValue] = useState(0);
//   const [files, setFiles] = useState([]);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [formData, setFormData] = useState({
//     department: "",
//     headline: "",
//     issueDate: "",
//     details: "",
//     file: null,
//   });
//   const [editFile, setEditFile] = useState(null); // To store the file being edited
//   const [isEditing, setIsEditing] = useState(false); // To open/close the edit dialog
//   const [successDialogOpen, setSuccessDialogOpen] = useState(false); // For success dialog

//   const departments = [
//     "Civil-Engg.",
//     "Comm. Revenue Accounting and Energy Accounting",
//     "CRITL",
//     "Finance and Accounts",
//     "Human Resource and Administration",
//     "I.T.",
//     "Inter State",
//     "Power Management Cell",
//     "Project and Planning",
//     "SLDC",
//     "Store and Material",
//     "STU",
//     "Telecom",
//     "Training",
//     "Transmission(O and M)",
//     "ULDC",
//   ]; // departments

//   // Handle tab switch
//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle file change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({ ...formData, file });
//   };
  
//   const handleSubmit = async () => {
//     if (!formData.file) {
//       alert("Please upload a document before submitting.");
//       return;
//     }
  
//     const formDataToSend = new FormData();
//     formDataToSend.append("Department", formData.department);
//     formDataToSend.append("HeadLine", formData.headline);
//     formDataToSend.append("Issue_Date", formData.issueDate);
//     formDataToSend.append("Description", formData.details);
//     formDataToSend.append("Document", formData.file);
  
//     try {
//       const response = await axios.post(
//         "/api/v1/circular/create",
//         formDataToSend,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
  
//       if (response.status === 200) {
//         setFiles([...files, response.data]);
//         setFormData({
//           Department: "",
//           HeadLine: "",
//           Issue_Date: "",
//           Description: "",
//           Document: null,
//         });
//         setSuccessDialogOpen(true);
//       }
//     } catch (error) {
      
//       alert("Failed to submit data. Please try again.");
//     }
//   };
  

//   const handleSuccessDialogClose = () => {
//     setSuccessDialogOpen(false);
//   };

//   // Handle delete with confirmation prompt
//   const handleDelete = async (id) => {
//     const confirmDeletion = window.confirm("Are you sure you want to delete this file?");
//     if (confirmDeletion) {
//       try {
//         await axios.delete(`/api/circulars/delete${id}`);
//         setFiles(files.filter((file) => file.id !== id));
//       } catch (error) {
//         console.error("Error deleting file:", error);
//         alert("Failed to delete file. Please try again.");
//       }
//     }
//   };

//   // Open edit dialog
//   const handleEdit = (file) => {
//     setEditFile({ ...file });
//     setIsEditing(true);
//   };

//   // Handle edit input change
//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditFile((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle edit file change
//   const handleEditFileChange = (e) => {
//     const file = e.target.files[0];
//     setEditFile((prev) => ({ ...prev, file, fileName: file?.name }));
//   };

//   // Save edited file
//   const handleEditSave = async () => {
//     const formDataToSend = new FormData();
//     formDataToSend.append("department", editFile.department);
//     formDataToSend.append("headline", editFile.headline);
//     formDataToSend.append("issueDate", editFile.issueDate);
//     formDataToSend.append("details", editFile.details);
//     if (editFile.file) formDataToSend.append("file", editFile.file);

//     try {
//       await axios.put(`/api/v1/circular/${editFile.id}`, formDataToSend, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       setFiles((prevFiles) =>
//         prevFiles.map((file) => (file.id === editFile.id ? editFile : file))
//       );
//       setIsEditing(false);
//       setEditFile(null);
//     } catch (error) {
//       console.error("Error updating file:", error);
//       alert("Failed to update file. Please try again.");
//     }
//   };

//   // Close edit dialog
//   const handleEditCancel = () => {
//     setIsEditing(false);
//     setEditFile(null);
//   };
//   return (
//     <>
//       {/* Success Dialog */}
//       <Dialog
//         open={successDialogOpen}
//         onClose={handleSuccessDialogClose}
//         aria-labelledby="success-dialog-title"
//         aria-describedby="success-dialog-description"
//       >
//         <DialogTitle id="success-dialog-title">Success</DialogTitle>
//         <DialogContent>
//           <Typography id="success-dialog-description">
//             Data submitted successfully!
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleSuccessDialogClose} autoFocus>
//             OK
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <AdminHeader />

//       <Box sx={{ display: "flex", height: "100vh" }}>
//         {/* Sidebar */}
//         <Box sx={{ width: "20%", borderRight: "1px solid #ddd" }}>
//           <SidebarMenu />
//         </Box>

//         {/* Content */}
//         <Box sx={{ flex: 1, padding: 4 }}>
//           <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 2 }}>
//             <Tab label="Add" />
//             <Tab label="View" />
//           </Tabs>
//           <Typography variant="h5" sx={{ mb: 2 }}>
//             Circulars
//           </Typography>
//           {tabValue === 0 && (
//             <Box component="form" noValidate autoComplete="off">
//               <Grid container spacing={2}>
//                 {/* First Row: Department and Issue Date */}
//                 <Grid item xs={6}>
//                   <FormControl fullWidth variant="outlined">
//                     <InputLabel id="department-label">Department</InputLabel> 
//                     <Select
//                       labelId="department-label"
//                       id="department"
//                       name="department"
//                       value={formData.department}
//                       onChange={handleChange}
//                       label="Department"
//                       required
//                     >
//                       {departments.map((dept) => (
//                         <MenuItem key={dept} value={dept}>
//                           {dept}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <TextField
//                     label="Issue Date"
//                     name="issueDate"
//                     value={formData.issueDate}
//                     onChange={handleChange}
//                     type="date"
//                     InputLabelProps={{ shrink: true }}
//                     fullWidth
//                     required
//                   />
//                 </Grid>

//                 {/* Second Row: Headline */}
//                 <Grid item xs={12}>
//                   <TextField
//                     label="Headline"
//                     name="headline"
//                     value={formData.headline}
//                     onChange={handleChange}
//                     fullWidth
//                     required
//                   />
//                 </Grid>

//                 {/* Third Row: Details */}
//                 <Grid item xs={12}>
//                   <TextField
//                     label="Details"
//                     name="details"
//                     value={formData.details}
//                     onChange={handleChange}
//                     multiline
//                     rows={4}
//                     fullWidth
//                   />
//                 </Grid>


//                 {/* First Row: Upload Document */}
//                 <Grid item xs={12}>
//                   <Box display="flex" flexWrap="wrap">
//                     <Button
//                       variant="outlined"
//                       sx={{
//                         backgroundColor: "#d3d3d3", // Gray color
//                         color: "black",
//                         borderColor: "#a9a9a9",
//                         '&:hover': {
//                           backgroundColor: "#a9a9a9", // Darker gray on hover
//                         },
//                       }}
//                       component="label"
//                     >
//                       Upload Document
//                       <input type="file" hidden onChange={handleFileChange} />
//                     </Button>
//                     {formData.file && (
//                       <Typography variant="body2" sx={{ ml: 2 }}>
//                         {formData.file.name} uploaded
//                       </Typography>
//                     )}
//                     {/* Success Message */}
//                     {successMessage && (
//                       <Typography
//                         variant="body2"
//                         color="green"
//                         sx={{ ml: 2, mt: { xs: 1, sm: 0 }, flexBasis: "100%" }}
//                       >
//                         {successMessage}
//                       </Typography>
//                     )}
//                   </Box>
//                 </Grid>


//                 {/* Second Row: Submit Button */}
//                 <Grid item xs={12}>
//                   <Box display="flex" justifyContent="center">
//                     <Button
//                       variant="contained"
//                       color="primary"
//                       onClick={handleSubmit}
//                     >
//                       Submit
//                     </Button>
//                   </Box>
//                 </Grid>

//                 {/* Display success message */}
//                 {successMessage && (
//                   <Grid item xs={12}>
//                     <Typography variant="body2" color="green" sx={{ mt: 2, textAlign: "center" }}>
//                       {successMessage}
//                     </Typography>
//                   </Grid>
//                 )}


//               </Grid>

//             </Box>
//           )}

//           {tabValue === 1 && (
//             <Table>
//               <TableHead sx={{
//                 backgroundColor: "#f5f5f5", // Light gray background color
//                 '& .MuiTableCell-root': {
//                   fontWeight: "bold", // Make the font bold
//                   color: "black", // Optional: set the text color
//                 },
//               }}>
//                 <TableRow>
//                   <TableCell>Department</TableCell>
//                   <TableCell>Headline</TableCell>
//                   <TableCell>Issue Date</TableCell>
//                   <TableCell>Details</TableCell>
//                   <TableCell>Document</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {files.map((file) => (
//                   <TableRow key={file.id}>
//                     <TableCell>{file.department}</TableCell>
//                     <TableCell>{file.headline}</TableCell>
//                     <TableCell>{file.issueDate}</TableCell>
//                     <TableCell>{file.details}</TableCell>
//                     <TableCell>
//                       <a
//                         href={URL.createObjectURL(file.file)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         View File
//                       </a>
//                     </TableCell>
//                     <TableCell>
//                       <IconButton color="primary" onClick={() => handleEdit(file)}>
//                         <EditIcon />
//                       </IconButton>
//                       <IconButton color="error" onClick={() => handleDelete(file.id)}>
//                         <DeleteIcon />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           )}
//         </Box>
//       </Box>

//       {/* Edit Dialog */}
//       {editFile && (
//         <Dialog open={isEditing} onClose={handleEditCancel}>
//           <DialogTitle>Edit Circular</DialogTitle>
//           <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
//             <TextField
//               label="Department"
//               name="department"
//               value={editFile.department || ""}
//               onChange={handleEditChange}
//               fullWidth
//               required
//             />
//             <TextField
//               label="Headline"
//               name="headline"
//               value={editFile.headline || ""}
//               onChange={handleEditChange}
//               fullWidth
//               required
//             />
//             <TextField
//               label="Issue Date"
//               name="issueDate"
//               value={editFile.issueDate || ""}
//               onChange={handleEditChange}
//               type="date"
//               InputLabelProps={{ shrink: true }}
//               fullWidth
//               required
//             />
//             <TextField
//               label="Details"
//               name="details"
//               value={editFile.details || ""}
//               onChange={handleEditChange}
//               multiline
//               rows={4}
//               fullWidth
//             />
//             <Button variant="contained" color="primary" component="label">
//               Upload New Document
//               <input type="file" hidden onChange={handleEditFileChange} />
//             </Button>
//             {editFile.file && (
//               <Typography variant="body2" sx={{ mt: 1 }}>
//                 Current File: {editFile.fileName || editFile.file.name}
//               </Typography>
//             )}
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleEditCancel}>Cancel</Button>
//             <Button variant="contained" color="primary" onClick={handleEditSave}>
//               Save
//             </Button>
//           </DialogActions>
//         </Dialog>
//       )}
//     </>
//   );
// };

// export default Circulars;


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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AdminHeader from "./Components/AdminHeader";
import SidebarMenu from "./Components/SideBarMenu";
import axios from "axios"; // Add axios for API calls

const Circulars = () => {
  const [tabValue, setTabValue] = useState(0);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    department: "",
    headline: "",
    issueDate: "",
    details: "",
    file: null,
  });
  const [editFile, setEditFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  const departments = [
    "Civil-Engg.",
    "Comm. Revenue Accounting and Energy Accounting",
    "CRITL",
    "Finance and Accounts",
    "Human Resource and Administration",
    "I.T.",
    "Inter State",
    "Power Management Cell",
    "Project and Planning",
    "SLDC",
    "Store and Material",
    "STU",
    "Telecom",
    "Training",
    "Transmission(O and M)",
    "ULDC",
  ];

  // Handle tab switch
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleSubmit = async () => {
    if (!formData.file) {
      alert("Please upload a document before submitting.");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("Department", formData.department);
    formDataToSend.append("HeadLine", formData.headline);
    formDataToSend.append("Issue_Date", formData.issueDate);
    formDataToSend.append("Description", formData.details);
    formDataToSend.append("Document", formData.file);

    try {
      const response = await axios.post("/api/v1/circular/create", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        setFiles([...files, response.data.data]);
        setFormData({
          department: "",
          headline: "",
          issueDate: "",
          details: "",
          file: null,
        });
        setSuccessMessage("Circular created successfully!");
        setSuccessDialogOpen(true);
      }
    } catch (error) {
      alert("Failed to submit data. Please try again.");
    }
  };

  const handleSuccessDialogClose = () => {
    setSuccessDialogOpen(false);
  };

  const handleDelete = async (id) => {
    const confirmDeletion = window.confirm("Are you sure you want to delete this file?");
    if (confirmDeletion) {
      try {
        await axios.delete(`/api/v1/circular/delete/${id}`);
        setFiles(files.filter((file) => file._id !== id));
      } catch (error) {
        alert("Failed to delete file. Please try again.");
      }
    }
  };

  const handleEdit = (file) => {
    setEditFile({ ...file });
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFile((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditFileChange = (e) => {
    const file = e.target.files[0];
    setEditFile((prev) => ({ ...prev, file, fileName: file?.name }));
  };

  const handleEditSave = async () => {
    const formDataToSend = new FormData();
    formDataToSend.append("department", editFile.department);
    formDataToSend.append("headline", editFile.headline);
    formDataToSend.append("issueDate", editFile.issueDate);
    formDataToSend.append("details", editFile.details);
    if (editFile.file) formDataToSend.append("file", editFile.file);

    try {
      await axios.put(`/api/v1/circular/${editFile._id}`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setFiles((prevFiles) =>
        prevFiles.map((file) => (file._id === editFile._id ? editFile : file))
      );
      setIsEditing(false);
      setEditFile(null);
    } catch (error) {
      alert("Failed to update file. Please try again.");
    }
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditFile(null);
  };

  return (
    <>
      {/* Success Dialog */}
      <Dialog open={successDialogOpen} onClose={handleSuccessDialogClose}>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <Typography>{successMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessDialogClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <AdminHeader />

      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box sx={{ width: "20%", borderRight: "1px solid #ddd" }}>
          <SidebarMenu />
        </Box>

        <Box sx={{ flex: 1, padding: 4 }}>
          <Tabs value={tabValue} onChange={handleTabChange} sx={{ mb: 2 }}>
            <Tab label="Add" />
            <Tab label="View" />
          </Tabs>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Circulars
          </Typography>
          {tabValue === 0 && (
            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>Department</InputLabel>
                    <Select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      label="Department"
                      required
                    >
                      {departments.map((dept) => (
                        <MenuItem key={dept} value={dept}>
                          {dept}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Issue Date"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleChange}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Headline"
                    name="headline"
                    value={formData.headline}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="outlined" component="label">
                    Upload Document
                    <input type="file" hidden onChange={handleFileChange} />
                  </Button>
                  {formData.file && (
                    <Typography variant="body2">{formData.file.name} uploaded</Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="center">
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}

          {tabValue === 1 && (
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Department</TableCell>
                  <TableCell>Headline</TableCell>
                  <TableCell>Issue Date</TableCell>
                  <TableCell>Details</TableCell>
                  <TableCell>Document</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {files.map((file) => (
                  <TableRow key={file._id}>
                    <TableCell>{file.department}</TableCell>
                    <TableCell>{file.headline}</TableCell>
                    <TableCell>{file.issueDate}</TableCell>
                    <TableCell>{file.details}</TableCell>
                    <TableCell>
                      <a href={file.document} target="_blank" rel="noopener noreferrer">
                        View Document
                      </a>
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleEdit(file)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => handleDelete(file._id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Circulars;
