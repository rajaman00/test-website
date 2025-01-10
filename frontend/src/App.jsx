import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserRoutes from './UserRoutes';
import AdminRoutes from './AdminRoutes';

function App() {
  return (
    <Router>
      {/* Define separate route components */}
      <UserRoutes />
      <AdminRoutes />
    </Router>
  );
}

export default App;
