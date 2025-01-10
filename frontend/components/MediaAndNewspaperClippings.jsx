import React, { useState, useEffect } from 'react';
import '../components/css/MediaAndNewspaperClippings.css';

function MediaAndNewspaperClippings() {
  const [activeButtonLeft, setactiveButtonLeft] = useState('SocialMedia');
  const [activeButtonRight, setactiveButtonRight] = useState('NewspaperClippings');
  const [showSocialMediaL, setshowSocialMediaL] = useState(true);
  const [showNewspaperClippingsR, setshowNewspaperClippingsR] = useState(true);

  const handleButtonClick = (section, type) => {
    if (section === 'left') {
      setshowSocialMediaL(type === 'SocialMedia');
      setactiveButtonLeft(type);
    } else {
      setshowNewspaperClippingsR(type === 'NewspaperClippings');
      setactiveButtonRight(type);
    }
  };

  const images = [
    '../public/images/NewspaperClippings/n1.jpg',
    '../public/images/NewspaperClippings/n2.jpg',
    '../public/images/NewspaperClippings/n3.jpg',
    '../public/images/NewspaperClippings/n4.jpg',
    '../public/images/NewspaperClippings/n5.jpg',
    '../public/images/NewspaperClippings/n6.jpg',
    '../public/images/NewspaperClippings/n7.jpg'
  ];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container1" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <div className="section">
        <div className="button-container">
          <button
            onClick={() => handleButtonClick('left', 'SocialMedia')}
            className={`button ${activeButtonLeft === 'SocialMedia' ? 'active' : ''}`}
          >
            Social Media
          </button>
        </div>
        <div className="content-container">
          {showSocialMediaL && (
            <div className="content">
              <div className="twitter-feed">
                <a
                  className="twitter-timeline"
                  // href="https://twitter.com/narendramodi"
                  href="https://twitter.com/BiharEnergy"
                  // href="https://twitter.com/seva_bsptcl"

                  data-width="1000"
                  data-height="600"
                  data-theme="light"
                >
                </a>
              </div>
              <button className="view-more-button">View More</button>
            </div>
          )}
        </div>
      </div>

      <div className="separator"></div>

      <div className="section">
        <div className="button-container">
          <button
            onClick={() => handleButtonClick('right', 'NewspaperClippings')}
            className={`button ${activeButtonRight === 'NewspaperClippings' ? 'active' : ''}`}
          >
            In the News
          </button>
        </div>
        <div className="content-container">
          {showNewspaperClippingsR && (
            <div className="content">
              <div style={{
                display: 'flex',
                gap: '20px',
                overflowX: 'auto',
                overflowY: 'hidden'
              }}>
                {images.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`Image ${index + 1}`} 
                    className="image"
                  />
                ))}
              </div>
              <button className="view-more-button">View More</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MediaAndNewspaperClippings;