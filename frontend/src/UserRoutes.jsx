import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import ScreenReader from './Pages/ScreenReader.jsx';
import Sitemap from './Pages/SiteMap.jsx';
import OfficeOrder from './Pages/OfficeOrder.jsx';
import Circular from './Pages/Circulars.jsx';
import Notifications from './Pages/Notifications.jsx';
import AnnualReport from './Pages/AnnualReport.jsx';
import ActiveTenders from './Pages/ActiveTenders.jsx';
import ActiveTenderDetails from './Pages/ActiveTenderDetails.jsx';
import TariffDetails from './Pages/TariffDetails.jsx';
import ArchiveTenders from './Pages/ArchiveTenders.jsx';
import CancelledTenders from './Pages/CancelledTenders.jsx';
import BoardMember from './Pages/BoardMember.jsx';
import Certificates from './Pages/Certificates.jsx';
import Awards from './Pages/Awards.jsx';
import OrganizationStructure from './Pages/OrganizationStructure.jsx';
import CompanyOverview from './Pages/CompanyOverview.jsx';
import TransmissionLines from './Pages/TransmissionLines.jsx';
import Grids from './Pages/Grids.jsx';
import TAFM from './Pages/TAFM.jsx';
import ATC_TTC from './Pages/ATC_TTC.jsx';
import PeakDemand from './Pages/PeakDemand.jsx';
import UpcomingTransmissionLines from './Pages/UpcomingTransmissionLines.jsx';
import UpcomingGrids from './Pages/UpcomingGrids.jsx';
import NewsPaper_Clipping from './Pages/NewsPaper_Clipping.jsx';
import PhotoGalleryPage from './Pages/PhotoGalleryPage.jsx';
import PhotoGalleryDetails from './Pages/PhotoGalleyDetails.jsx'
import TransferPosting from './Pages/TransferPosting.jsx';
import NoticeBoard from './Pages/NoticeBoard.jsx';
import PhoneDirectory from './Pages/PhoneDirectory.jsx';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/screen-reader" element={<ScreenReader />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/office-order" element={<OfficeOrder />} />
      <Route path="/circulars" element={<Circular />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/annual-reports" element={<AnnualReport />} />
      <Route path="/active-tenders" element={<ActiveTenders />} />
      <Route path="/cancelled-tenders" element={<CancelledTenders />} />
      <Route path="/transfer-posting" element={<TransferPosting/>  } />
      <Route path="/active-tenders/view-tenders/:tenderId" element={<ActiveTenderDetails />} />
      <Route path="/tariff-petitons" element={<TariffDetails />} />
      <Route path="/archive-tenders" element={<ArchiveTenders />} />``
      <Route path="/board-directors" element={<BoardMember />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/awards-achievements" element={<Awards />} />
      <Route path="/organization-structure" element={<OrganizationStructure />} />
      <Route path="/company-overview" element={<CompanyOverview />} />
      <Route path="/transmission-lines" element={<TransmissionLines />} />
      <Route path="/grids" element={<Grids />} />
      <Route path="/TAFM" element={<TAFM />} />
      <Route path="/atc-ttc" element={<ATC_TTC />} />
      <Route path="/peak-demand-met" element={<PeakDemand />} />
      <Route path="/upcoming-transmission-lines" element={<UpcomingTransmissionLines />} />
      <Route path="/upcoming-grids" element={<UpcomingGrids />} />
      <Route path="/newspaper-clippings" element={<NewsPaper_Clipping />} />
      <Route path="/photo-gallery" element={<PhotoGalleryPage />} />
      <Route path="/Noticeboard" element={<NoticeBoard/>  } />
      <Route path="/photo-gallery/photo-gallery-details" element={<PhotoGalleryDetails />} />
      <Route path="/phone-directory" element={<PhoneDirectory/>  } />
    </Routes>
  );
};

export default UserRoutes;
