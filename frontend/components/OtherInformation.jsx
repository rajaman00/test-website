import React, { useState, useEffect } from "react";
import "./css/OtherInformation.css";
import image from "../public/images/Ringtest/logoVigilance.png";
import image1 from "../public/images/Ringtest/grievance-redressal.png"
import image2 from "../public/images/Ringtest/logoRTI.png";
import image3 from "../public/images/Ringtest/logoGST.png";
import image4 from "../public/images/Ringtest/cin image.png";

const OtherInformation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      icon: image,
      data: {
        title: "BSPTCL Vigilance Cell",
        description: "Contact No. : 7763817975<br>Email: cvo.trans@bsptcl.bihar.gov.in"
      }
    },
    {
      icon: image1,
      data: {
        title: "Departmental Grievance Redressal Cell",
        description: "Contact No. : 7763817975<br>Email: dgrcell@bsptcl.bihar.gov.in"
      }
    },
    {
      icon: image2,
      data: {
        title: "Right to Information",
        description: "PIO :- Shri Rajeev Kumar Singh,DS <br>Appellate Authority :- Shri Jawahar Prasad DGM(HR)<br>Mailing Address :- 4th floor, Vidyut Bhawan II , Jawahar Lal Nehru Marg , Patna , 800021"
      }
    },
    {
      icon: image3,
      data: {
        title: "Goods & Services Tax",
        description: "GST No. :- 10AAFCB2393H1Z1"
      }
    },
    {
      icon: image4,
      data: {
        title: "Corporate Identification Number",
        description: "CIN No. :- U74110BR2012SGC018889"
      }
    }
  ];

  const extendedItems = [...items, ...items, ...items]; // Extend items array to enable smooth looping

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change the delay in milliseconds for the speed of movement

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % extendedItems.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + extendedItems.length) % extendedItems.length);
  };

  return (
    <div className="sustainability-container">
      <h1 className="sustainability-title">Other Information</h1>
      <div className="sustainability-carousel">
        <div className="sustainability-content" style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}>
          {extendedItems.map((item, index) => (
            <div className="sustainability-item" key={index}>
              <div className="sustainability-icon">
                <img src={item.icon} alt="Icon" />
              </div>
              <div className="sustainability-data">
                <h2>{item.data.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: item.data.description }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sustainability-pagination">
        <button className="sustainability-pagination-button" onClick={handlePrevious}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L4 8L8 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="sustainability-pagination-button" onClick={handleNext}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4L12 8L8 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OtherInformation;