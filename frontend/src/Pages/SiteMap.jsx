
import React from 'react';
import './css/sitemap.css';
import NavigationBar from '../../components/NavigationBar'
import HeaderBox from './Header';
import Footer from '../../components/Footer'
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'

const Sitemap = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Phone Directory', href: '#' }
  ];
  return (
    <>
    <NavigationBar />
    <HeaderBox backgroundImage={backgroundImage} title="Website Sitemap" breadcrumbs={breadcrumbs}/>
    <div className="sitemap-container">
      <h1>Website Sitemap</h1>
      <ul>
        {/* About Us Section */}
        <li>
          <strong>About Us</strong>
          <ul>
            <li><a href="/company-overview">Company Overview</a></li>
            <li><a href="/board-directors">Board of Directors</a></li>
            <li><a href="/organization-structure">Organization Structure</a></li>
            <li><a href="/awards-achievements">Awards & Achievements</a></li>
            <li><a href="/certificates">Certificates</a></li>
            <li><a href="/annual-reports">Annual Reports</a></li>
          </ul>
        </li>

        {/* Transmission Network Section */}
        <li>
          <strong>Transmission Network</strong>
          <ul>
            <li>
              <strong>Current Infrastructure</strong>
              <ul>
                <li><a href="/transmission-lines">Transmission Lines</a></li>
                <li><a href="/grids">Grids</a></li>
              </ul>
            </li>
            <li><a href="/Documents/Bihar-Power-Map.pdf" target="_blank" rel="noopener noreferrer">Power Map (PDF)</a></li>
            <li>
              <strong>System Parameters</strong>
              <ul>
                <li><a href="/TAFM">TAFM</a></li>
                <li><a href="/atc-ttc">ATC/TTC</a></li>
                <li><a href="/peak-demand-met">Peak Demand Met</a></li>
                <li><a href="/load-pattern">Load Pattern</a></li>
                <li><a href="/arp">ARP</a></li>
              </ul>
            </li>
            <li><a href="/transmission-loss">Transmission Loss</a></li>
            <li>
              <strong>Upcoming Infrastructure</strong>
              <ul>
                <li><a href="/upcoming-transmission-lines">Transmission Lines</a></li>
                <li><a href="/upcoming-grids">Grids</a></li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Media Section */}
        <li>
          <strong>Media</strong>
          <ul>
            <li><a href="/annual-reports">Reports/Compendium</a></li>
            <li><a href="/e-magazine">E-Magazine</a></li>
            <li><a href="/photo-gallery">Photo Gallery</a></li>
            <li><a href="/twitter">Twitter</a></li>
            <li><a href="/newspaper-clippings">Newspaper Clippings</a></li>
          </ul>
        </li>

        {/* Procurement Section */}
        <li>
          <strong>Procurement</strong>
          <ul>
            <li><a href="/schedule-of-rate">Schedule of Rate</a></li>
            <li><a href="/policy">Policy</a></li>
            <li><a href="/tender">Tender</a></li>
            <li><a href="https://eproc2.bihar.gov.in/EPSV2Web/" target="_blank" rel="noopener noreferrer">E-Procurement (External Link)</a></li>
            <li><a href="https://gem.gov.in/" target="_blank" rel="noopener noreferrer">GEM (External Link)</a></li>
          </ul>
        </li>

        {/* STU Section */}
        <li>
          <strong>STU (State Transmission Utility)</strong>
          <ul>
            <li>
              <strong>Regulations</strong>
              <ul>
                <li><a href="/grid-code-of-bihar">Grid Code of Bihar</a></li>
                <li><a href="/grid-code-of-india">Grid Code of India</a></li>
                <li><a href="/electricity-act-2003">Electricity Act 2003</a></li>
                <li><a href="/other-regulation-1">Other Regulation 1</a></li>
                <li><a href="/other-regulation-2">Other Regulation 2</a></li>
              </ul>
            </li>
            <li><a href="/tariff-petitions">Tariff Petitions</a></li>
            <li><a href="/open-access">Open Access</a></li>
          </ul>
        </li>

        {/* Employee Section */}
        <li>
          <strong>Employee</strong>
          <ul>
            <li><a href="/office-order">Office Order</a></li>
            <li><a href="/transfer-posting">Transfer & Posting</a></li>
            <li><a href="/circulars">Circulars</a></li>
            <li><a href="http://pay.bsphcl.org/" target="_blank" rel="noopener noreferrer">Pay & Pension (External Link)</a></li>
            <li><a href="https://apar.bsphcl.co.in/" target="_blank" rel="noopener noreferrer">APAR (External Link)</a></li>
            <li><a href="https://medical.bsphcl.co.in/" target="_blank" rel="noopener noreferrer">Mediclaim (External Link)</a></li>
            <li><a href="https://ess.bihar.gov.in:44300/irj/portal" target="_blank" rel="noopener noreferrer">ESS/MSS (External Link)</a></li>
            <li><a href="http://125.16.220.20:8077/Form16" target="_blank" rel="noopener noreferrer">Form 16 (External Link)</a></li>
            <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">ERP (External Link)</a></li>
          </ul>
        </li>

        {/* Hamburger Menu Section */}
        <li>
          <strong>Hamburger Menu</strong>
          <ul>
            <li><a href="/career">Career</a></li>
            <li><a href="/it-initiatives">IT Initiatives</a></li>
            <li><a href="/power-map">Power Map</a></li>
            <li><a href="/upcoming-infrastructure">Upcoming Infrastructure</a></li>
            <li><a href="/e-magazine">E-Magazine</a></li>
            <li><a href="/photo-gallery">Photo Gallery</a></li>
            <li><a href="/policy">Policy</a></li>
            <li><a href="/tender">Tender</a></li>
            <li><a href="/gem">GEM</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <Footer />
    </>
  );
};

export default Sitemap;