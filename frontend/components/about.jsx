import React, { useEffect } from 'react';
import './css/about.css';
import AOS from "aos";
import "aos/dist/aos.css";
import cmImage from '../public/images/AboutImages/nitishkumar.jpg';
import EnergyMinister from '../public/images/AboutImages/Energy Minister.jpg';
import md from '../public/images/AboutImages/New MD Sir.jpeg.jpg'
import cmd from '../public/images/AboutImages/cmd.jpg';
import { useTranslation } from 'react-i18next';



function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const { t } = useTranslation();
    return (
        <>
            {/* about section start */}

            <div className="aboutSection">
                <div className="aboutText" data-aos="fade-up" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">

                    <h3 className="decorative-heading">{t('about-us')}</h3>
                    {/* <h3 style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '3rem', fontFamily: 'Brush Script MT, cursive' }}>About Us </h3> */}

                    <p style={{ textAlign: 'justify' }}> {t('about-section-text')}             </p>
                    <br /><br /><button className="view-more-button">{t('view-more')}</button>
                </div>

                <div className="aboutImage" data-aos="fade-up" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    {/* Add image or any content here */}
                    {/* CM image */}
                    <div className="Card">
                        <div className='imageContainer'>
                            <img src={cmImage} alt="CM Image" className="cardImage" />
                        </div>
                        <div className='cardText'>
                            <h5 className='designationName'>Chief Minister</h5>
                            <p className='OfficeHolderName'>Nitish Kumar</p>
                        </div>
                    </div>

                    {/* Energy Minister */}
                    <div className="Card">
                        <div className='imageContainer'>
                            <img src={EnergyMinister} alt="CM Image" className="cardImage" />
                        </div>
                        <div className='cardText'>
                            <h5 className='designationName'>Energy Minister</h5>
                            <p className='OfficeHolderName'> Sri Bijendra Pd. Yadav</p>
                        </div>
                    </div>



                    {/* CMD */}
                    <div className="Card">
                        <div className='imageContainer'>
                            <img src={cmd} alt="CM Image" className="cardImage" />
                        </div>
                        <div className='cardText'>
                            <h5 className='designationName'>Chairman-cum-MD</h5>
                            <p className='OfficeHolderName'>Sri Pankaj Kumar Pal</p>
                        </div>
                    </div>

                    {/* MD */}
                    <div className="Card">
                        <div className='imageContainer'>
                            <img src={md} alt="CM Image" className="cardImage" />
                        </div>
                        <div className='cardText'>
                            <h5 className='designationName'>Managing Director</h5>
                            <p className='OfficeHolderName'> Dr. Nilesh Ramchandra Deore</p>
                        </div>
                    </div>

                </div>
                


            </div>




        </>
    );
}

export default About;