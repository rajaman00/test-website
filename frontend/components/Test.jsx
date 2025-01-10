import React from 'react'
import '../components/css/test.css'
import NewImage from '../public/images/NotificationImages/new.gif'
//import whatsnew from '../public/images/NotificationImages/text.gif'

function Test() {
  return (
    <div className='test'>
      <div style={{ display: 'flex', position: 'relative', width: '38%' }}>
        <div style={{ color: "white", backgroundColor: "#0bafec", padding: '4px',display:'flex', alignItems:'center', width: '100%' }}><h5 style={{ marginLeft: '30%' }}>What's New?</h5></div>
        <div className="leftCrossEffect"></div>
      </div>
      <div className="scrolling-text-container">
        <div className="scrolling-text marqueeAnimation-37574610">
          <li> Regarding uninterrupted power supply during Diwali and Chhath puja vide Notification No. 2770 dated 22.10.2024 <img src={NewImage} alt="" /> </li>
          <li> Regarding Standard Operating Procedures (SOP).<img src={NewImage} alt="" /></li>
          <li> Public Notice regarding safety warning in light of charging of 220kV double circuit Tajpur-Samastipur (New) Transmission Line on or after 18.10.2024<img src={NewImage} alt="" /></li>
          <li> Public Notice regarding safety warning in light of charging of 220kV double circuit Tajpur- Shahpur patori Transmission Line on or after 17.10.2024<img src={NewImage} alt="" /></li>
          <li> Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li> Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>
          <li> Notice Board. Some placeholder text. And some more text.<img src={NewImage} alt="" /></li>

          
        </div>
        
      </div>
      {/* <div style={{ position: 'relative', display: 'flex' }}>
        <div style={{ color: "white", backgroundColor: "#2f2963", zIndex: '2', padding: '4px', }}><h4 style={{ marginLeft: '5px' }}>More Links</h4></div>
         <div className="rightCrossEffect"></div> 
      </div> */}
    </div>
  )
}

export default Test;