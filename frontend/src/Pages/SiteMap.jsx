import React from 'react';
import { List, ListItem, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function App() {
  const [openAbout, setOpenAbout] = React.useState(false);
  const [openTransmission, setOpenTransmission] = React.useState(false);
  const [openInfrastructure, setOpenInfrastructure] = React.useState(false);

  const handleAboutClick = () => {
    setOpenAbout(!openAbout);
  };

  const handleTransmissionClick = () => {
    setOpenTransmission(!openTransmission);
  };

  const handleInfrastructureClick = () => {
    setOpenInfrastructure(!openInfrastructure);
  };

  return (
    <List component="nav">
      {/* About Us Menu */}
      <ListItem button onClick={handleAboutClick}>
        {openAbout ? <ExpandLess /> : <ExpandMore />}
        About Us
      </ListItem>
      <Collapse in={openAbout} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button sx={{ pl: 4 }}>
            Company Overview
          </ListItem>
          <ListItem button sx={{ pl: 4 }}>
            Board of Directors
          </ListItem>
          <ListItem button sx={{ pl: 4 }}>
            Organization Structure
          </ListItem>
        </List>
      </Collapse>

      {/* Transmission Network Menu */}
      <ListItem button onClick={handleTransmissionClick}>
        {openTransmission ? <ExpandLess /> : <ExpandMore />}
        Transmission Network
      </ListItem>
      <Collapse in={openTransmission} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button onClick={handleInfrastructureClick} sx={{ pl: 4 }}>
            {openInfrastructure ? <ExpandLess /> : <ExpandMore />}
            Current Infrastructure
          </ListItem>
          <Collapse in={openInfrastructure} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 8 }}>
                Transmission Lines
              </ListItem>
              <ListItem button sx={{ pl: 8 }}>
                Grids
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Collapse>
    </List>
  );
}

export default App;
