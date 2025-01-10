import React, { useState, useEffect } from "react";
import "./css/PhotoGallery.css";
import image from "../public/images/PhotoGallery/FoundationDay.jpg";
import image1 from "../public/images/PhotoGallery/SportsDay.jpg"
import image2 from "../public/images/PhotoGallery/HindiDiwas.jpg";
import image3 from "../public/images/PhotoGallery/ElectionDay.jpg";
import image4 from "../public/images/PhotoGallery/HoliMilan.jpg";
import { Link } from "react-router-dom";

const PhotoGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      icon: image,
      data: {
        title: "Foundation Day",
        description: "Date: 01-11-2023"
      }
    },
    {
      icon: image1,
      data: {
        title: "Sports Day",
        description: "Date: 01-11-2023"
      }
    },
    {
      icon: image2,
      data: {
        title: "Hindi Diwas",
        description: "Date: 01-11-2023"
      }
    },
    {
      icon: image3,
      data: {
        title: "Election Day",
        description: "Date: 01-11-2023"
      }
    },
    {
      icon: image4,
      data: {
        title: "Holi Milan Samaroh",
        description: "Date: 01-11-2023"
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
    <div className="photoGallery-container">
      <h1 className="photoGallery-title">Photo Gallery</h1>
      <div className="photoGallery-carousel">
        <div className="photoGallery-content" style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}>
          {extendedItems.map((item, index) => (
            <div className="photoGallery-item" key={index}>
              <div className="photoGallery-icon">
               <Link to="/photo-gallery"> <img src={item.icon} alt="Icon" /></Link>
              </div>
              <div className="photoGallery-data">
                <h2>{item.data.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: item.data.description }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="photoGallery-pagination">
        <button className="photoGallery-pagination-button" onClick={handlePrevious}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L4 8L8 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button className="photoGallery-pagination-button" onClick={handleNext}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4L12 8L8 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;