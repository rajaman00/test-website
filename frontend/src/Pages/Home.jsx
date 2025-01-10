import React from 'react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../../src/Pages/css/home.css'
import NavigationBar from '../../components/NavigationBar';
import Slider from '../../components/Slider';
import About from '../../components/about';
import StickyMenu from '../../components/StickyMenu';
import Test from '../../components/Test';
import VMVsection from '../../components/VMVsection';
import AwardsSection from '../../components/AwardsSection';
import DisplayMap from '../../components/DisplayMap';
import Tenders from '../../components/tenders';
import OtherUtilities from '../../components/OtherUtilities';
import Footer from '../../components/Footer';
import OtherInformation from '../../components/OtherInformation';
import PhotoGallery from '../../components/PhotoGallery';
import MediaAndNewspaperClippings from '../../components/MediaAndNewspaperClippings';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="wraper">
        <div className="navigationBar">
          <NavigationBar/>
        </div>
        <div className="sliderSection">
          <Slider/>
        </div>
        
        <div className='about' id='main-content' >
          <About/>
        </div>

        <div className='stickyMenu'>
          <StickyMenu/>
        </div>
        <div className='test'>
        <Test/>
        </div>

        <div className="VMVsection">
           <VMVsection/>
        </div>

        <div className="awardSection">
          <AwardsSection/>
        </div>

        <div className="mapSection">
          <DisplayMap/>
        </div>

        <div className="OtherInformationSection">
          <OtherInformation/>
        </div>

        <div className="tenders" id='tender'>
           <Tenders/>
        </div>

        <div className="PhotoGallery">
          <PhotoGallery/>
        </div>

        <div className="MediaAndNewspaperClippings">
          <MediaAndNewspaperClippings/>
        </div>

        <div className="OtherUtilities">
          <OtherUtilities/>
        </div>

        <div className="footerSection">
          <Footer/>
        </div>
        
      </div>

    </>


  );
}

export default App;