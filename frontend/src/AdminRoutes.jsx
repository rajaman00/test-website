import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './admin/Login.jsx';
import Circulars from './admin/Circulars.jsx';
import Notifications from './admin/Notifications.jsx';
import Tender from './admin/Tender.jsx';
import CancelledTender from './admin/CancelledTender.jsx';
import TransferPosting from './admin/TransferPosting.jsx';
import AdminOfficeOrder from './admin/AdminOfficeOrder.jsx';
import Designation from './admin/Designation.jsx'
import MapSection from './admin/MapSection.jsx'
import NoticeBoard from './admin/NoticeBoard.jsx';
import PhotoGallery from './admin/PhotoGallery.jsx';
import PhoneDirectory from './admin/PhoneDirectory.jsx';
import AboutImages from './admin/AboutImages.jsx';
import Transmission from './admin/Transmission.jsx';
import Grids from './admin/Grids.jsx';
import UpcomingTransmission from './admin/UpcomingTransmission.jsx';
import UpcomingGrids from './admin/UpcominGrids.jsx';

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
      <Route path="/admin/notice-board" element={<NoticeBoard/> } />
      <Route path="/admin/photo-gallery" element={<PhotoGallery/> } />
      <Route path="/admin/phone-directory" element={<PhoneDirectory/> } />

<Route path="/admin/designation-master" element={<Designation/> } />
      <Route path="/admin/map-section" element={<MapSection/> } />

      <Route path="/admin/about-images" element={<AboutImages/> } />
      <Route path="/admin/transmission" element={<Transmission/> } />
      <Route path="/admin/grids" element={<Grids/> } />
      <Route path="/admin/upcoming-transmission" element={<UpcomingTransmission/> } />
      <Route path="/admin/upcoming-grids" element={<UpcomingGrids/> } />
    </Routes>
  );
};

export default AdminRoutes;
