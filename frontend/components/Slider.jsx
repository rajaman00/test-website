import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './css/slider.css';
import sliderImg1 from '../public/images/Control Room at Mahnar.jpg';
import sliderImg2 from '../public/images/Switchyard at Areraj.jpg';
import sliderImg3 from '../public/images/Switchyard at Bhabhua.jpg';


function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='slider'>
      <Carousel data-bs-theme="dark" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg1}
              alt="Slide"
            />
            <div className="hover-text">Control Room at Mahnar</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg2}
              alt="Slide"
            />
            <div className="hover-text">Switchyard at Areraj</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img
              className="d-block w-100 sliderImg"
              src={sliderImg3}
              alt="Slide"
            />
            <div className="hover-text">Switchyard at Bhabhua</div>
          </div>
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default Slider;
