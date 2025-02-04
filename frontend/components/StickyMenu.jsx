import React, { useState } from 'react';
import '../components/css/stickymenu.css';
import phone from '../public/images/NotificationImages/phone.png';
import ess from '../public/images/NotificationImages/ESS.png';
import apar from '../public/images/NotificationImages/APAR.png';
import mediclaim from '../public/images/NotificationImages/mediclaim.png';
import flm from '../public/images/NotificationImages/FLM.png';
import email from '../public/images/NotificationImages/email.png';
import twitter from '../public/images/NotificationImages/twitter.png';

function StickyMenu() {
  const menus = [
    { img: phone, text: 'Phone Directory', link: '/phone-directory' },
    { img: apar, text: 'APAR', link: '/apar' },
    { img: ess, text: 'ESS/ MSS', link: '/ess-mss' },
    { img: mediclaim, text: 'Mediclaim', link: '/mediclaim' },
    { img: flm, text: 'FLM', link: '/flm' },
    { img: email, text: 'e-Mail', link: '/email' },
    { img: twitter, text: 'Twitter', link: 'https://twitter.com' }
  ];

  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseOver = (index) => {
    setActiveMenu(index);
  };

  const handleMouseOut = () => {
    setActiveMenu(null);
  };

  return (
    <div className="sticky-menu">
      {menus.map((menu, index) => (
        <div
          key={index}
          className={`divmenu${index + 1}`}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
        >
          {activeMenu === index ? (
            <div style={{ display: 'flex', width: '12rem', justifyContent: 'space-between', alignItems: 'center' }}>
              <a href={menu.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                {menu.text}
              </a>
              <div>
                <img
                  src={menu.img}
                  alt={menu.text}
                  style={{ width: '2.5rem', height: '2.5rem', objectFit: 'contain' }}
                />
              </div>
            </div>
          ) : (
            <a href={menu.link}>
              <img
                src={menu.img}
                alt={menu.text}
                style={{ width: '2.5rem', height: '2.5rem', objectFit: 'contain' }}
              />
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

export default StickyMenu;
