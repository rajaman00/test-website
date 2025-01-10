import React, { useEffect } from 'react';
import '../components/css/VMVsection.css';
import AOS from "aos";
import "aos/dist/aos.css";

function VMVsection() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="parentVMV">
      <div className="background-image"></div>
      <div className="VMV">
        {/* Vision Div */}
        <div className="vision" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div className="text-header-container">
            <h4 className='text-header'>Vision</h4>
          </div>
          <div className="text-content">
            <ul><li>
              To deliver excellence in service, innovation, efficiency, and sustainability for driving the growth and development of communities and industries, while ensuring environmental stewardship and maximizing value for the people of the state.
            </li> </ul> </div>
        </div>

        {/* Mission Div */}
        <div className="mission" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div className="text-header-container">
            <h4 className='text-header'>Mission</h4>
          </div>
          <div className="text-content">
            Striving to achieve the vision of the company by:
            <ul>
              <li>Commitment to operational excellence, innovation and sustainability, ensuring uninterrupted and quality delivery of power.</li>
              <li>Adoption of world-class technology and practices to ensure the efficient and reliable delivery of electricity from power generation sources to distribution networks and directly to open-access consumers</li>
              <li>Adopting cost-effective power transmission services that support economic growth and improve the quality of life for the people of the state.</li>
            </ul>
          </div>
        </div>

        {/* Values Div */}
        <div className="value" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div className="text-header-container">
            <h4 className='text-header'>Values</h4>
          </div>
          <div className="text-content">
            <ul>
              <li>Transparency, Accountability and Integrity.</li>
              <li>Quality service and social responsibility.</li>
              <li>Responsive to change and new developments.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VMVsection;