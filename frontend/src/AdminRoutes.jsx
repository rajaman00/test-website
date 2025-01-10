import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './admin/Login.jsx';
import Circulars from './admin/Circulars.jsx';
import Notifications from './admin/Notifications.jsx';
import Tender from './admin/Tender.jsx';
import CancelledTender from './admin/CancelledTender.jsx';
import TransferPosting from './admin/TransferPosting.jsx';
import AdminOfficeOrder from './admin/AdminOfficeOrder.jsx';
import MapSection from './admin/MapSection.jsx'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Login />} />
      <Route path="/admin/circulars" element={<Circulars />} />
      <Route path="/admin/notifications" element={<Notifications />} />
      <Route path="/admin/tenders" element={<Tender />} />
      <Route path="/admin/cancelled-tenders" element={<CancelledTender />} />
      <Route path="/admin/transfer-posting" element={<TransferPosting />} />
      <Route path="/admin/office-order" element={<AdminOfficeOrder />} />

      <Route path="/admin/map-section" element={<MapSection/> } />
    </Routes>
  );
};

export default AdminRoutes;
