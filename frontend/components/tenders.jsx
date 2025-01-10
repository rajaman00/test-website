import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../components/css/tenders.css';

function Tenders() {
  const [activeTenders, setActiveTenders] = useState([]);
  const [cancelledTenders, setCancelledTenders] = useState([]);
  const [archivedTenders, setArchivedTenders] = useState([]);
  const [officeOrders, setOfficeOrders] = useState([]);
  const [circularNotice, setCircularNotice] = useState([]);
  const [transferPostings, setTransferPostings] = useState([]);
  const [activeButtonLeft, setActiveButtonLeft] = useState('ActiveTenders');
  const [showActiveTendersL, setShowActiveTendersL] = useState(true);
  const [showCancelledTendersL, setShowCancelledTendersL] = useState(false);
  const [showArchivedTendersL, setShowArchivedTendersL] = useState(false);
  const [activeButtonRight, setActiveButtonRight] = useState('OfficeOrders');
  const [showOfficeOrdersR, setShowOfficeOrdersR] = useState(true);
  const [showTransferPostingsR, setShowTransferPostingsR] = useState(false);
  const [showCircularsR, setShowCircularsR] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const activeResponse = await axios.get('/api/v1/tender/active');
        setActiveTenders(activeResponse.data.data || []);
      } catch (error) {
        console.error("Error fetching active tenders:", error);
      }

      try {
        const cancelledResponse = await axios.get('/api/v1/tender/cancelled');
        setCancelledTenders(cancelledResponse.data.data || []);
      } catch (error) {
        console.error("Error fetching cancelled tenders:", error);
      }

      try {
        const archivedResponse = await axios.get('/api/v1/tender/archived');
        setArchivedTenders(archivedResponse.data.data || []);
      } catch (error) {
        console.error("Error fetching archived tenders:", error);
      }

      try {
        const officeOrderResponse = await axios.get('/api/v1/officeOrder/getAll');
        setOfficeOrders(officeOrderResponse.data.data || []);
      } catch (error) {
        console.error("Error fetching office orders:", error);
      }

      try {
        const transferPostingsResponse = await axios.get('/api/v1/transferPosting/getAll');
        setTransferPostings(transferPostingsResponse.data.data || []);
      } catch (error) {
        console.error("Error fetching transfer postings:", error);
      }

      try {
        const circularNoticeResponse = await axios.get('/api/v1/circular/getAll');
        setCircularNotice(circularNoticeResponse.data.data || []);
      } catch (error) {
        console.error("Error fetching circular notices:", error);
      }
    };
    fetchData();
  }, []);

  const handleButtonClick = (section, type) => {
    if (section === 'left') {
      setShowActiveTendersL(type === 'ActiveTenders');
      setShowCancelledTendersL(type === 'CancelledTenders');
      setShowArchivedTendersL(type === 'ArchivedTenders');
      setActiveButtonLeft(type);
    } else {
      setShowOfficeOrdersR(type === 'OfficeOrders');
      setShowTransferPostingsR(type === 'TransferPostings');
      setShowCircularsR(type === 'Circulars');
      setActiveButtonRight(type);
    }
  };

  const openDocument = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container1" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <div className="section">
        <div className="button-container">
          <button onClick={() => handleButtonClick('left', 'ActiveTenders')} className={`button ${activeButtonLeft === 'ActiveTenders' ? 'active' : ''}`}>
            Active Tenders
          </button>
          <button onClick={() => handleButtonClick('left', 'CancelledTenders')} className={`button ${activeButtonLeft === 'CancelledTenders' ? 'active' : ''}`}>
            Cancelled Tenders
          </button>
          <button onClick={() => handleButtonClick('left', 'ArchivedTenders')} className={`button ${activeButtonLeft === 'ArchivedTenders' ? 'active' : ''}`}>
            Archived Tenders
          </button>
        </div>

        <div className="content-container">
          {showActiveTendersL && (
            <div className="content">
              {activeTenders.map((tender) => (
                <div key={tender._id} className="rowData">
                  <a href={`/${tender.Alias_Name1}`} target="_blank" rel="noopener noreferrer">
                    <div className="document-icon">
                      <img src="public/images/doc.png" alt="Document Icon" />
                    </div>
                  </a>
                  <div className="details-header">
                    <a href={`/${tender.Alias_Name1}`} target="_blank" rel="noopener noreferrer">
                      {/* <h6>{tender.HeadLine}</h6> */}
                      <Link to="/active-tenders" style={{ textDecoration: 'none' }}>
                        <h6>{tender.HeadLine}</h6>
                      </Link>
                    </a>
                    <div className="details-container">
                      <p>Issue Date: {new Date(tender.Publishing_Date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Link to='/active-tenders'><button className="view-more-button">View More</button></Link>
            </div>
          )}

          {showCancelledTendersL && (
            <div className="content">
              {cancelledTenders.map((tender) => (
                <div key={tender._id} className="rowData">
                  <a href={`/${tender.Alias_Name1}`} target="_blank" rel="noopener noreferrer">
                    <div className="document-icon">
                      <img src="public/images/doc.png" alt="Document Icon" />
                    </div>
                  </a>
                  <div className="details-header">
                    <a href={`/${tender.Alias_Name1}`} target="_blank" rel="noopener noreferrer">
                      <h6>{tender.HeadLine}</h6>
                    </a>
                    <div className="details-container">
                      <p>Issue Date: {new Date(tender.Publishing_Date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))}
              <button className="view-more-button">View More</button>
            </div>
          )}

          {showArchivedTendersL && (
            <div className="content">
              {archivedTenders.map((tender) => (
                <div key={tender._id} className="rowData">
                  <a href={`/${tender.Alias_Name1}`} target="_blank" rel="noopener noreferrer">
                    <div className="document-icon">
                      <img src="public/images/doc.png" alt="Document Icon" />
                    </div>
                  </a>
                  <div className="details-header">
                    <a href={`/${tender.Alias_Name1}`} target="_blank" rel="noopener noreferrer">
                      <h6>{tender.HeadLine}</h6>
                    </a>
                    <div className="details-container">
                      <p>Issue Date: {new Date(tender.Publishing_Date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))}
              <button className="view-more-button">View More</button>
            </div>
          )}
        </div>
      </div>

      <div className="separator"></div>

      <div className="section">
        <div className="button-container">
          <button onClick={() => handleButtonClick('right', 'OfficeOrders')} className={`button ${activeButtonRight === 'OfficeOrders' ? 'active' : ''}`}>
            Office Orders
          </button>
          <button onClick={() => handleButtonClick('right', 'TransferPostings')} className={`button ${activeButtonRight === 'TransferPostings' ? 'active' : ''}`}>
            Transfer Postings
          </button>
          <button onClick={() => handleButtonClick('right', 'Circulars')} className={`button ${activeButtonRight === 'Circulars' ? 'active' : ''}`}>
            Circulars
          </button>
        </div>

        <div className="content-container">
          {showOfficeOrdersR && (
            <div className="content">
              {officeOrders.map((order) => (
                <div key={order._id} className="rowData">
                  <a href={`http://localhost:8000/${order.Document}`} target="_blank" rel="noopener noreferrer">
                    <div className="document-icon">
                      <img src="public/images/doc.png" alt="Document Icon" />
                    </div>
                  </a>
                  <div className="details-header">
                    <a href={`http://localhost:8000/${order.Document}`} target="_blank" rel="noopener noreferrer">
                    <Link to='/office-order'>
                    <h6>{order.Order_Title}</h6>
                    </Link>

                    </a>
                    <div className="details-container">
                      <p>Department: {order.Department}</p>
                      <p className="verticalSeparator">|</p>
                      <p>Issue Date: {new Date(order.Publishing_Date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Link to='/office-order'><button className="view-more-button">View More</button></Link>

            </div>
          )}

          {showTransferPostingsR && (
            <div className="content">
              {transferPostings.map((posting) => (
                <div key={posting._id} className="rowData">
                  <a href={`http://localhost:8000/${posting.Document}`} target="_blank" rel="noopener noreferrer">
                    <div className="document-icon">
                      <img src="public/images/doc.png" alt="Document Icon" />
                    </div>
                  </a>
                  <div className="details-header">
                    <a href={`http://localhost:8000/${posting.Document}`} target="_blank" rel="noopener noreferrer">
                      <h6>{posting.Description}</h6>
                    </a>
                    <div className="details-container">
                      <p>Department: {posting.Department}</p>
                      <p className="verticalSeparator">|</p>
                      <p>Issue Date: {new Date(posting.Issue_Date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))}
              <button className="view-more-button">View More</button>
            </div>
          )}

          {showCircularsR && (
            <div className="content">
              {circularNotice.map((notice) => (
                <div key={notice._id} className="rowData">
                  <a href={`http://localhost:8000/${notice.Document}`} target="_blank" rel="noopener noreferrer">
                    <div className="document-icon">
                      <img src="public/images/doc.png" alt="Document Icon" />
                    </div>
                  </a>
                  <div className="details-header">
                    <a href={`http://localhost:8000/${notice.Document}`} target="_blank" rel="noopener noreferrer">
                      <h6>{notice.Description}</h6>
                    </a>
                    <div className="details-container">
                      <p>Department: {notice.Department}</p>
                      <p className="verticalSeparator">|</p>
                      <p>Issue Date: {new Date(notice.Issue_Date).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))}
              <button className="view-more-button">View More</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tenders;

