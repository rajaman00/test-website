import React from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

function SidebarMenu() {
  const basePath = '/admin';
  const menuItems = [
    { label: 'Circular', path: '/circulars' },
    { label: 'Notifications', path: '/notifications' },
    { label: 'Tender', path: '/tenders' },
    { label: 'Cancelled Tenders', path: '/cancelled-tenders' },
    { label: 'Transfer/Posting', path: '/transfer-posting' },
    { label: 'Notice Board', path: '/notice-board' },
    { label: 'Office Order', path: '/office-order' },
    { label: 'NIT/RFP', path: '/nit-rfp' },
    { label: 'EOI', path: '/eoi' },
    { label: 'Photo Gallery', path: '/photo-gallery' },
    { label: 'Tariff Details', path: '/tariff-details' },
    { label: 'Reports & Accounts', path: '/reports-accounts' },
    { label: 'Publications & Forms', path: '/publications-forms' },
    { label: 'Career', path: '/career' },
    { label: 'Information on Shut Down', path: '/shutdown-info' },
    { label: 'Phone Directory', path: '/phone-directory' },
    { label: 'Designation Master', path: '/designation-master' },
    { label: 'ATC/TTC', path: '/atc-ttc' },
    { label: 'Map-Section', path: '/map-section' },
  ];

  return (
    <Box sx={{ width: 250, backgroundColor: '#f5f5f5', padding: 2 }}>
      <List component="nav">
        {menuItems.map((item, index) => (
          <ListItem
            button
            component={Link}
            to={`${basePath}${item.path}`} // Use the admin base path directly
            key={index}
            sx={{
              backgroundColor: '#673ab7',
              color: '#fff',
              marginBottom: '8px',
              '&:hover': {
                backgroundColor: '#512da8',
              },
              borderRadius: '4px',
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SidebarMenu;
