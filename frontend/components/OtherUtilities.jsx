import React from 'react';
import '../components/css/otherUtilities.css';

const OtherUtilities = () => {
  const icons = [
    {
      src: 'images/logoGoB.png',
      alt: 'ENERGY DEPT.',
      name: 'ENERGY DEPT.',
      link: 'https://energy.bihar.gov.in/',
    },
    {
      src: 'images/logoBSPHCL.png',
      alt: 'BSPHCL',
      name: 'BSPHCL',
      link: 'https://bsphcl.co.in/',
    },
    {
      src: 'images/logoBSPGCL.png',
      alt: 'BSPGCL',
      name: 'BSPGCL',
      link: 'https://bspgcl.bih.nic.in/',
    },
    {
      src: 'images/logoNBPDCL.png',
      alt: 'NBPDCL',
      name: 'NBPDCL',
      link: 'https://nbpdcl.co.in/',
    },
    {
      src: 'images/logoSBPDCL.png',
      alt: 'SBPDCL',
      name: 'SBPDCL',
      link: 'https://sbpdcl.co.in/',
    },
    {
      src: 'images/logoBSPTCL.png',
      alt: 'BIHAR SLDC',
      name: 'BIHAR SLDC',
      link: 'https://bsptcl.bih.nic.in/',
    },
    {
      src: 'images/logoBERC.png',
      alt: 'BERC',
      name: 'BERC',
      link: 'https://berc.co.in/',
    },
    {
      src: 'images/logoCERC.png',
      alt: 'CERC',
      name: 'CERC',
      link: 'https://cercind.gov.in/',
    },
    {
      src: 'images/logoCEA.png',
      alt: 'CEA',
      name: 'CEA',
      link: 'https://cea.nic.in/',
    },
    {
      src: 'images/logoERPC.png',
      alt: 'ERPC',
      name: 'ERPC',
      link: 'https://erpc.gov.in/',
    },
    {
      src: 'images/logoPOSOCO.png',
      alt: 'NLDC',
      name: 'NLDC',
      link: 'https://posoco.in/',
    },
    {
      src: 'images/logoPOSOCO.png',
      alt: 'ERLDC',
      name: 'ERLDC',
      link: 'https://erldc.in/',
    },
    {
      src: 'images/logoPowergrid.png',
      alt: 'POWERGRID',
      name: 'POWERGRID',
      link: 'https://www.powergrid.in/',
    },
    // Add more icons as needed
  ];

  const repetitions = 4;
  const repeatedIcons = Array.from({ length: repetitions }, () => icons).flat();

  return (
    <div className="other-utilities-container">
      <div className="other-utilities-slider">
        <ul className="other-utilities-list">
          {repeatedIcons.map((icon, index) => (
            <li key={index} className="other-utilities-item">
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <img src={icon.src} alt={icon.alt} />
                <p>{icon.name}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OtherUtilities;
