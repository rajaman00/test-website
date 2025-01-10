import React from 'react';
import '../components/css/otherUtilities.css';

const OtherUtilities = () => {
  const icons = [
    
    {
      src: 'images/logoGoB.png',
      alt: 'ENERGY DEPT.',
      name: 'ENERGY DEPT.',
    },
    {
      src: 'images/logoBSPHCL.png',
      alt: 'BSPHCL',
      name: 'BSPHCL',
    },
    {
      src: 'images/logoBSPGCL.png',
      alt: 'BSPGCL',
      name: 'BSPGCL',
    },
    {
      src: 'images/logoNBPDCL.png',
      alt: 'NBPDCL',
      name: 'NBPDCL',
    },
    {
      src: 'images/logoSBPDCL.png',
      alt: 'SBPDCL',
      name: 'SBPDCL',
    },
    {
      src: 'images/logoBSPTCL.png',
      alt: 'BIHAR SLDC',
      name: 'BIHAR SLDC',
    },
   
    {
      src: 'images/logoBERC.png',
      alt: 'BERC',
      name: 'BERC',
    },
    {
      src: 'images/logoCERC.png',
      alt: 'CERC',
      name: 'CERC',
    },
    {
      src: 'images/logoCEA.png',
      alt: 'CEA',
      name: 'CEA',
    },
    {
      src: 'images/logoERPC.png',
      alt: 'ERPC',
      name: 'ERPC',
    },
    {
      src: 'images/logoPOSOCO.png',
      alt: 'NLDC',
      name: 'NLDC',
    },
   
    {
      src: 'images/logoPOSOCO.png',
      alt: 'ERLDC',
      name: 'ERLDC',
    },
  
    {
      src: 'images/logoPowergrid.png',
      alt: 'POWERGRID',
      name: 'POWERGRID',
    }   

    // Add more icons as needed
  ];

  const repetitions = 4;
  const repeatedIcons = Array.from({ length: repetitions }, () => icons).flat();

  return (
    <div className="other-utilities-container" >
      <div className="other-utilities-slider">
        <ul className="other-utilities-list">
          {repeatedIcons.map((icon, index) => (
            <li key={index} className="other-utilities-item">
              <img src={icon.src} alt={icon.alt} />
              <p>{icon.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OtherUtilities;