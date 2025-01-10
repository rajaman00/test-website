import React from 'react'
import '../components/css/awardSection.css'
import NewImage from '../public/images/NotificationImages/new.gif'

function AwardsSection() {
  return (
    <div className='awardContainer' >
    
      <div style={{ display: 'flex', position: 'relative', width: '20%' }}>
        <div style={{ color: "white", backgroundColor: "#0bafec", padding: '4px',display:'flex', alignItems:'center', width: '100%' }}><h5 style={{ marginLeft: '30%' }}>Awards</h5></div>
        <div className="awardleftCrossEffect"></div>
      </div>
      <div className="award-scrolling-text-container">
        <div className="award-scrolling-text award-marqueeAnimation-37574610">
          <li>News 1: Notice Board. Some placeholder text. And some more text. <img src={NewImage} alt="" /> </li>
          <li>News 2: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 3: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 4: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 5: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 6: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li>News 7: Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>

          
        </div>
        
      </div>
    </div>

  )
}

export default AwardsSection