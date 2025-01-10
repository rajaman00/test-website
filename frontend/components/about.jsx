import React, { useEffect } from 'react';
import './css/about.css';
import AOS from "aos";
import "aos/dist/aos.css";
import cmImage from '../public/images/AboutImages/nitishkumar.jpg';
import EnergyMinister from '../public/images/AboutImages/Energy Minister.jpg';
import md from '../public/images/AboutImages/New MD Sir.jpeg.jpg'
import cmd from '../public/images/AboutImages/cmd.jpg';



function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            {/* about section start */}

            <div className="aboutSection">
                <div className="aboutText" data-aos="fade-up" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">

                    <h3 className="decorative-heading">About Us</h3>
                    {/* <h3 style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '3rem', fontFamily: 'Brush Script MT, cursive' }}>About Us </h3> */}

                    <p style={{ textAlign: 'justify' }}>Bihar State Power Transmission Company Limited, a subsidiary company of Bihar State Power (Holding) Company Limited, is a Government of Bihar wholly owned corporate entity incorporated under the Companies Act 1956 on 1st Nov, 2012 after restructuring of erstwhile Bihar State Electricity Board. It carries out intra-state transmission and wheeling of electricity under license issued by the Bihar Electricity Regulatory Commission. It also discharges the functions of State Load Despatch Centre (SLDC) of Bihar.               </p>
                    <br /><br /><button className="view-more-button">View More</button>
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