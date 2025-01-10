// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import logo from '../../../public/images/logoBSPTCL.png';

// const AdminHeader = () => {
//   const handleLogout = () => {
//     // Logic for logout
//     localStorage.removeItem("isAdmin"); // Example: Clear admin session
//     alert("Logged out successfully!");
//     window.location.href = "/admin"; // Redirect to login page
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "10px 20px",
//         background: "linear-gradient(90deg, #f9f9f9, #fff)",
//         boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
//         borderBottom: "4px solid #8A2BE2", // Modern purple line
//       }}
//     >
//       {/* Logo Section */}
//       <Box sx={{ display: "flex", alignItems: "center" }}>
//         <img
//           src={logo} // Replace with the logo URL
//           alt="Company Logo"
//           style={{
//             height: "70px",
//             width: "70px",
//             borderRadius: "50%", // Circle logo
//           }}
//         />
//         <Box sx={{ marginLeft: "10px" }}>
//           {/* Company Name */}
//           <Typography
//             variant="h5"
//             sx={{ fontWeight: "bold", color: "#4A148C" }}
//           >
//             Bihar State Power Transmission Company Ltd.
//           </Typography>
//           {/* Subtitle */}
//           <Typography
//             variant="subtitle1"
//             sx={{ color: "#6A1B9A", fontSize: "14px" }}
//           >
//             Government of Bihar
//           </Typography>
//         </Box>
//       </Box>

//       {/* Logout Button */}
//       <Box>
//         <Button
//           variant="contained"
//           color="secondary"
//           sx={{
//             fontWeight: "bold",
//             backgroundColor: "#8A2BE2",
//             '&:hover': {
//               backgroundColor: "#6A1B9A",
//             },
//           }}
//           onClick={handleLogout}
//         >
//           Logout
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default AdminHeader;

import React from "react";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";
import logo from '../../../public/images/logoBSPTCL.png';

const AdminHeader = () => {
  const handleLogout = async () => {
    try {
      // Call the logout API
      
      const response = await axios.post("/api/v1/users/logout", {}, {
        withCredentials: true, // Include this if the API requires cookies
      });

      if (response.status === 200) {
        // Clear admin session
        localStorage.removeItem("isAdmin");
        alert("Logged out successfully!");
        window.location.href = "/admin"; // Redirect to login page
      } else {
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("An error occurred while logging out. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "linear-gradient(90deg, #f9f9f9, #fff)",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        borderBottom: "4px solid #8A2BE2", // Modern purple line
      }}
    >
      {/* Logo Section */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo} // Replace with the logo URL
          alt="Company Logo"
          style={{
            height: "70px",
            width: "70px",
            borderRadius: "50%", // Circle logo
          }}
        />
        <Box sx={{ marginLeft: "10px" }}>
          {/* Company Name */}
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "#4A148C" }}
          >
            Bihar State Power Transmission Company Ltd.
          </Typography>
          {/* Subtitle */}
          <Typography
            variant="subtitle1"
            sx={{ color: "#6A1B9A", fontSize: "14px" }}
          >
            Government of Bihar
          </Typography>
        </Box>
      </Box>

      {/* Logout Button */}
      <Box>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            fontWeight: "bold",
            backgroundColor: "#8A2BE2",
            '&:hover': {
              backgroundColor: "#6A1B9A",
            },
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default AdminHeader;

