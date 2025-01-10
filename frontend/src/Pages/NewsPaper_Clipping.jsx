import React from 'react'
import HeaderBox from './Header';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer'
import backgroundImage from '../../public/images/Switchyard at Bakhri GSS.jpg'


function NewsPaper_Clipping() {
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Media', href: '#' },
        { label: 'News Paper Clipping' }
      ];
  return (
    <>
     <NavigationBar />
      <HeaderBox
        backgroundImage={backgroundImage}
        title="News Paper Clipping"
        breadcrumbs={breadcrumbs}
      />
       <div style={{height:'800px', width:'100%',backgroundColor:'red'}}></div>
      <Footer/>
    </>
  )
}

export default NewsPaper_Clipping