import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { Nav, Navbar, Offcanvas, Button, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { RiEnglishInput } from "react-icons/ri";
import { FaSitemap, FaSearch } from "react-icons/fa";
import './css/navigationBar.css';
import logo from '../public/images/BSPTCL Logo & Name.gif';
import { FaMicrophone } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { GoTriangleRight } from "react-icons/go";
// import triangleImage from "../public/images/UpTriangle.png";
import triangleImage from "../public/images/d1.png";
import SearchComponent from './SearchComponent'; 


//overlay


function NavigationBar() {
    //offcanvas 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //About Dropdown
    const [isAboutHovered, setAboutHovered] = useState(false);

    //transmission N/W dropdown
    const [isTransmissionHovered, setTransmissionHovered] = useState(false);

    //transmission N/W CurInfrastructure dropdown
    const [isCurInfrastructureHovered, setCurInfrastructureHovered] = useState(false);

    //transmission N/W SysParameters dropdown
    const [isSysParametersHovered, setSysParametersHovered] = useState(false);

    //transmission N/W UpcomInfrastructure dropdown
    const [isUpcomInfrastructureHovered, setUpcomInfrastructureHovered] = useState(false);

    //Media dropdown
    const [isMediaHovered, setMediaHovered] = useState(false);

    // Procrument dropdown
    const [isProcurementHovered, setProcurementHovered] = useState(false);

    //STU dropdown
    const [isSTUHovered, setSTUHovered] = useState(false);

    //STU Regulations dropdown
    const [isRegulationsHovered, setRegulationsHovered] = useState(false);

    //Employee dropdown
    const [isEmployeeHovered, setEmployeeHovered] = useState(false);

    //Search logic
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (query) => {
        setSearchText(query);
    };

    //voice search
    const [text, setText] = useState('');

    const voiceSearch = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-GB';
        recognition.onresult = function (event) {
            setText(event.results[0][0].transcript);
            console.log(event.results[0][0].transcript);
        }
        recognition.start();
    }

    //Text translation
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const { t } = useTranslation();



    const [theme, setTheme] = useState('day'); // Initial theme state

    // Load theme from localStorage when the component mounts
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'day'; // default to 'day'
        setTheme(savedTheme);
        document.body.classList.add(`${savedTheme}-theme`);
    }, []);

    // Function to toggle the theme
    const toggleTheme = () => {
        const newTheme = theme === 'day' ? 'night' : 'day';
        setTheme(newTheme);

        // Remove the previous theme class from body and add the new one
        document.body.classList.remove(`${theme}-theme`);
        document.body.classList.add(`${newTheme}-theme`);

        // Save the new theme in localStorage
        localStorage.setItem('theme', newTheme);
    };

    // Function to change font size
    const [fontSize, setFontSize] = useState(100); // Default size in percentage (100%)

    const increaseFontSize = () => {
        if (fontSize < 110) { // Set max limit (e.g. 150%)
            setFontSize(fontSize + 10);
        }
    };

    const decreaseFontSize = () => {
        if (fontSize > 90) { // Set min limit (e.g. 70%)
            setFontSize(fontSize - 10);
        }
    };

    const resetFontSize = () => {
        setFontSize(100); // Reset to default (100%)
    };

    // Apply font size to html element
    useEffect(() => {
        document.documentElement.style.setProperty('font-size', `${fontSize}%`);
    }, [fontSize]);


    //Skip to main content
    const navigate = useNavigate();
    const location = useLocation();
    // Function to handle scroll with an offset
    const skipToMainContent = () => {
        if (location.pathname === '/') {
            // If already on the homepage, scroll to the content section
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                const offset = 90; // Adjust this value based on your navigation bar height
                const elementPosition = mainContent.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            // Navigate to the homepage and scroll to the content
            navigate('/', { state: { skipToMain: true } });
        }
    };

    // Use this logic after navigation
    useEffect(() => {
        if (location.state?.skipToMain) {
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                const offset = 90; // Adjust this value based on your navigation bar height
                const elementPosition = mainContent.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }, [location]);
    // for tender scrolling
    const TenderScroll = () => {
        const section = document.getElementById('tender');
        const offset = 150; // Adjust this value based on your navbar height
        const yOffset = section.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({ top: yOffset, behavior: 'smooth' });
    };


    const Tenderlocation = useLocation();

    useEffect(() => {
        if (Tenderlocation.hash === '#tender') {
            // Scroll only after a small delay to let the page load first
            setTimeout(() => {
                const section = document.getElementById('tender');
                if (section) {
                    const offset = 150; // Adjust based on navbar height
                    const yOffset = section.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: yOffset, behavior: 'smooth' });
                }
            }, 0);  // Small timeout to wait for the page render
        }
    }, [Tenderlocation]);




    return (
        <>
            {/* ---------utility link--------------- */}
            <div className='utilityLink'>
                <div className="leftSideDisplay">
                    <Link to="">An ISO 27001:2013 Company</Link>
                </div>
                <div className="rightSideDisplay">
                    <button onClick={skipToMainContent} style={{ cursor: 'pointer', borderRight: '1px solid gray' }}>{t('skip-to-main-content')}</button>
                    <hr />
                    <Link to="/screen-reader" style={{ borderRight: '1px solid gray' }}>Screen Reader</Link>
                    <button onClick={decreaseFontSize} style={{ cursor: 'pointer' }}>A-</button>
                    <button onClick={resetFontSize} style={{ cursor: 'pointer' }}>A</button>
                    <button onClick={increaseFontSize} style={{ cursor: 'pointer', borderRight: '1px solid gray' }}>A+</button>
                    <button onClick={toggleTheme} style={{ cursor: 'pointer', borderRight: '1px solid gray' }}>
                        {theme === 'day' ? <FaMoon /> : <MdSunny />}
                    </button>
                    <button onClick={() => changeLanguage('en')}><RiEnglishInput /></button>
                    <button style={{ borderRight: '1px solid gray' }} onClick={() => changeLanguage('hi')}>हि</button>
                    <Link to="/sitemap"><FaSitemap /></Link>
                </div>

            </div>
            {/* -------------------utility link end-------------- */}

            <div className='parent'>
                <div className="logoAndLink">
                    {/* ------------Company Logo ----------------------*/}
                    <div className='companyLogo'>
                        <Link to="/"><Image src={logo} loop="1" alt='BSPTCL' className='logoImage' /></Link>
                    </div>

                    {/* -------------------Main Link----------------- */}
                    <div className='mainLinkAndSearchBar'>
                        {/* -----search bar and company link----------  */}
                        <div className="searchBarAndCompanyLink">
                            {/* ----------------Search Bar------------ */}
                            <div className='searchBar'>
                           
                                <span style={{ marginRight: '8px' }}>
                                    <FaSearch />
                                </span>
                                 <SearchComponent searchText={searchText} onSearchChange={handleSearchChange} />
                                <span onClick={voiceSearch}><FaMicrophone /></span>
                            </div>

                        </div>

                        {/* ----------------------Main Link---------------------------------- */}
                        <div className="mainLink">
                            <div className="crossEffect"></div>
                            <Navbar collapseOnSelect expand="lg">
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="ms-auto">

                                        {/* ----About Us--- */}
                                        <li className='navLink'
                                            onMouseOver={() => setAboutHovered(true)}
                                            onMouseLeave={() => setAboutHovered(false)}>
                                            {t('about')}<span style={{ color: '#db8204' }}></span>
                                            {isAboutHovered && (

                                                <div className='AboutDropDown'><div style={{ height: '1rem', width: '100%', flexOrder: '1' }}></div>
                                                    <div className='triangle AboutTrianglePosition' ><img className='triangleImage' src={triangleImage} alt="" /></div>
                                                    <div className='dropDownMenu'>
                                                        < Link to="/company-overview" className='dropdownMenuText' >{t('overview')}</Link>
                                                        < Link to='/board-directors' className='dropdownMenuText' >{t('directors')}</Link>
                                                        < Link to='/organization-structure' className='dropdownMenuText'>{t('org_strct')}</Link>
                                                        < Link to='/awards-achievements' className='dropdownMenuText' >{t('award-achievement')}</Link>
                                                        < Link to='/certificates' className='dropdownMenuText' >{t('certificate')}</Link>
                                                        < Link to='/annual-reports' className='dropdownMenuText' >{t('reprots-accounts')}</Link>
                                                    </div>
                                                </div>
                                            )}
                                        </li>

                                        {/* Transmission Link and Dropdwon */}
                                        <li className='navLink'
                                            onMouseOver={() => setTransmissionHovered(true)}
                                            onMouseLeave={() => setTransmissionHovered(false)}
                                        >
                                            {t('transmission-n/w')}
                                            {isTransmissionHovered && (
                                                <div className='transmissionDropDown'><div style={{ height: '1rem', width: '100%', flexOrder: '1' }}></div>
                                                    <div className='triangle transmissionTrianglePosition'><img className='triangleImage' src={triangleImage} alt="" /></div>
                                                    <div className='dropDownMenu'>
                                                        < Link className='dropdownMenuText'
                                                            onMouseOver={() => setCurInfrastructureHovered(true)}
                                                            onMouseLeave={() => setCurInfrastructureHovered(false)}>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>{t('current-infrastrucrure')}<span style={{ color: '#db8204', fontSize: '18px' }}><GoTriangleRight /></span></div>
                                                            {isCurInfrastructureHovered && (
                                                                <div className='CurInfrastructureDropDown'>
                                                                    <div className='dropDownMenu'>
                                                                        < Link to='/transmission-lines' className='dropdownMenuText'>{t('transmission-lines')}</Link>
                                                                        < Link to='/grids' className='dropdownMenuText'>{t('grids')}</Link>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Link>
                                                        <Link
                                                            to="public/Documents/Bihar-Power-Map.pdf"
                                                            className='dropdownMenuText'
                                                            onClick={(e) => {
                                                                e.preventDefault(); // Prevent default handling
                                                                window.open("/Documents/Bihar-Power-Map.pdf", "_blank"); // Open the PDF in a new tab
                                                            }}
                                                        >
                                                            {t('power-map')}
                                                        </Link>
                                                        <div className='dropdownMenuText'
                                                            onMouseOver={() => setSysParametersHovered(true)}
                                                            onMouseLeave={() => setSysParametersHovered(false)}>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>{t('system-parameters')}<span style={{ color: '#db8204', fontSize: '18px' }}><GoTriangleRight /></span></div>
                                                            {isSysParametersHovered && (
                                                                <div className='SysParametersDropDown'>
                                                                    <div className='dropDownMenu'>
                                                                        < Link to='/TAFM' className='dropdownMenuText'>{t('tafm')}</Link>
                                                                        < Link to='/atc-ttc' className='dropdownMenuText'>{t('atc/ttc')}</Link>
                                                                        < Link to='/peak-demand-met' className='dropdownMenuText'>{t('peak-demand-met')}</Link>
                                                                        < Link className='dropdownMenuText'>{t('load-pattern')}</Link>
                                                                        < Link className='dropdownMenuText'>{t('arp')}</Link>
                                                                    </div>
                                                                </div>

                                                            )}

                                                        </div>
                                                        < Link className='dropdownMenuText'>{t('transmission-loss')}</Link>
                                                        < Link className='dropdownMenuText'
                                                            onMouseOver={() => setUpcomInfrastructureHovered(true)}
                                                            onMouseLeave={() => setUpcomInfrastructureHovered(false)}>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>{t('upcoming-infrastructure')}<span style={{ color: '#db8204', fontSize: '18px' }}><GoTriangleRight /></span></div>
                                                            {isUpcomInfrastructureHovered && (
                                                                <div className='UpcomInfrastructureDropDown'>
                                                                    <div className='dropDownMenu'>
                                                                        < Link to='/upcoming-transmission-lines' className='dropdownMenuText'>{t('transmission-lines')}</Link>
                                                                        < Link to='/upcoming-grids' className='dropdownMenuText'>{t('grids')}</Link>
                                                                    </div>
                                                                </div>

                                                            )}
                                                        </Link>
                                                    </div>
                                                </div>
                                            )}
                                        </li>

                                        {/* ------------Media Section---------- */}
                                        <li
                                            to="/#media"
                                            className='navLink'
                                            onMouseOver={() => setMediaHovered(true)}
                                            onMouseLeave={() => setMediaHovered(false)}
                                        >
                                            {t('media')}<span style={{ color: '#db8204' }}></span>
                                            {isMediaHovered && (
                                                <div className='mediaDropDown'><div style={{ height: '1rem', width: '100%', flexOrder: '1' }}></div>
                                                    <div className='triangle mediaTrianglePosition'><img className='triangleImage' src={triangleImage} alt="" /></div>
                                                    <div className='dropDownMenu'>
                                                        <Link to='/annual-reports' className='dropdownMenuText'>{t('reports/compendium')}</Link>
                                                        <Link to='/e-magazine' className='dropdownMenuText'>{t('e-magazine')}</Link>
                                                        <Link to='/photo-gallery' className='dropdownMenuText'>{t('photo-gallery')}</Link>
                                                        <Link to='/twitter' className='dropdownMenuText'>{t('twitter')}</Link>
                                                        <Link to='/newspaper-clippings' className='dropdownMenuText'>{t('newspaper-clippings')}</Link>
                                                    </div>
                                                </div>
                                            )}
                                        </li>



                                        {/* Procurement Section */}
                                        <li
                                            className='navLink'
                                            onMouseOver={() => setProcurementHovered(true)}
                                            onMouseLeave={() => setProcurementHovered(false)}>
                                            {t('procurement')}<span style={{ color: '#db8204' }}></span>
                                            {isProcurementHovered && (

                                                <div className='procurementDropDown'><div style={{ height: '1rem', width: '100%', flexOrder: '1' }}></div>
                                                    <div className='triangle procurementTrianglePosition'><img className='triangleImage' src={triangleImage} alt="" /></div>
                                                    <div className='dropDownMenu'>
                                                        < Link to="First" className='dropdownMenuText'>{t('schedule-of-rate')}</Link>
                                                        < Link className='dropdownMenuText'>{t('policy')}</Link>
                                                        <Link to="/#tender" href="#"
                                                            onClick={() => {

                                                                TenderScroll();
                                                            }} className='dropdownMenuText'>
                                                            {t('tender')}
                                                        </Link>
                                                        < Link to="https://eproc2.bihar.gov.in/EPSV2Web/" className='dropdownMenuText' target="_blank"
                                                            rel="noopener noreferrer" > {t('e-procurement')}  </Link>
                                                        < Link to="https://gem.gov.in/" className='dropdownMenuText' target="_blank"
                                                            rel="noopener noreferrer" >{t('gem')}</Link>
                                                    </div>
                                                </div>
                                            )}
                                        </li>

                                        {/* STU Section */}

                                        <li className='navLink'
                                            onMouseOver={() => setSTUHovered(true)}
                                            onMouseLeave={() => setSTUHovered(false)}>
                                            {t('stu')}<span style={{ color: '#db8204' }}></span>
                                            {isSTUHovered && (

                                                <div className='stuDropDown'><div style={{ height: '1rem', width: '100%', flexOrder: '1' }}></div>
                                                    <div className='triangle stuTrianglePosition'><img className='triangleImage' src={triangleImage} alt="" /></div>
                                                    <div className='dropDownMenu'>
                                                        < Link to="First" className='dropdownMenuText'
                                                            onMouseOver={() => setRegulationsHovered(true)}
                                                            onMouseLeave={() => setRegulationsHovered(false)}>
                                                            {t('regulations')}<span style={{ color: '#db8204' }}><GoTriangleRight /></span>
                                                            {isRegulationsHovered && (
                                                                <div className='RegulationsDropDown'>
                                                                    <div className='dropDownMenu'>
                                                                        < Link className='dropdownMenuText'>{t('grid-code-of-bihar')}</Link>
                                                                        < Link className='dropdownMenuText'>{t('grid-code-of-india')}</Link>
                                                                        < Link className='dropdownMenuText'>{t('electricity-act-2003')}</Link>
                                                                        < Link className='dropdownMenuText'>{t('other-regulation 1')}</Link>
                                                                        < Link className='dropdownMenuText'>{t('other-regulation 2')}</Link>
                                                                    </div>
                                                                </div>

                                                            )}
                                                        </Link>
                                                        < Link to="/tariff-petitons" className='dropdownMenuText'> {t('tariff-petitions')}</Link>
                                                        < Link className='dropdownMenuText' >{t('open-access')}</Link>
                                                    </div>
                                                </div>
                                            )}
                                        </li>

                                        {/* Employee Section */}
                                        <li className='navLink'
                                            onMouseOver={() => setEmployeeHovered(true)}
                                            onMouseLeave={() => setEmployeeHovered(false)}>
                                            {t('employee')}<span style={{ color: '#db8204' }}></span>
                                            {isEmployeeHovered && (

                                                <div className='employeeDropDown'><div style={{ height: '1rem', width: '100%', flexOrder: '1' }}></div>
                                                    <div className='triangle employeeTrianglePosition'><img className='triangleImage' src={triangleImage} alt="" /></div>
                                                    <div className='dropDownMenu'>
                                                        < Link to="/#office-notification" className='dropdownMenuText'>{t('office-order')}</Link>
                                                        < Link to="/#office-notification" className='dropdownMenuText'>{t('transfer-posting')}</Link>
                                                        < Link to="/#office-notification" className='dropdownMenuText'>{t('circulars')}</Link>
                                                        < Link to="http://pay.bsphcl.org/" className='dropdownMenuText' target="_blank"
                                                            rel="noopener noreferrer" >{t('pay-and-pension')}</Link>
                                                        < Link to="https://apar.bsphcl.co.in/" className='dropdownMenuText' target="_blank"
                                                            rel="noopener noreferrer" >{t('apar')}</Link>
                                                        < Link to="https://medical.bsphcl.co.in/" className='dropdownMenuText' target="_blank"
                                                            rel="noopener noreferrer" >{t('mediclaim')}</Link>
                                                        < Link to="https://ess.bihar.gov.in:44300/irj/portal" className='dropdownMenuText' target="_blank"
                                                            rel="noopener noreferrer" >{t('ess/mss')}</Link>
                                                        < Link to="http://125.16.220.20:8077/Form16" className='dropdownMenuText' target="_blank"
                                                            rel="noopener noreferrer" >{t('form 16')}</Link>
                                                        <Link
                                                            to="https://www.google.com"
                                                            className='dropdownMenuText'
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {t('erp')}
                                                        </Link>
                                                    </div>
                                                </div>
                                            )}
                                        </li>


                                        {/*-------------------------------------Hamburger section -----------------------------------*/}
                                        <Link to="#" className='navLink hamburgerMenu1'>

                                            <div>
                                                {/* Link with the hamburger menu */}
                                                <Link to="#" className='navLink'>
                                                    <RxHamburgerMenu onClick={handleShow} />
                                                </Link>

                                                {/* Dark overlay when the Offcanvas is open */}
                                                {show && <div className="overlay" onClick={handleClose}></div>}

                                                {/* Offcanvas Popup with placement on the right and custom height */}
                                                <Offcanvas
                                                    show={show}
                                                    onHide={handleClose}
                                                    placement="end"
                                                    className="custom-offcanvas"
                                                >

                                                    <Offcanvas.Body>
                                                        {/* Custom Close Button */}
                                                        <button
                                                            onClick={handleClose}
                                                            className="custom-close-btn"
                                                            aria-label="Close"
                                                        >
                                                            &times; {/* Or use an icon component if preferred */}
                                                        </button>

                                                        {/* Buttons container */}
                                                        <div className="button-container1">
                                                            <div className="row mb-3">
                                                                <div className="col">
                                                                    <Button className="custom-button">{t('career')}</Button>
                                                                </div>
                                                                <div className="col">
                                                                    <Button className="custom-button">{t('it-initiatives')}</Button>
                                                                </div>
                                                                <div className="col">
                                                                    <Button className="custom-button">{t('power-map')}</Button>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3">
                                                                <div className="col">
                                                                    <Button className="custom-button">{t('upcoming-infrastructure')}</Button>
                                                                </div>
                                                                <div className="col">
                                                                    <Button className="custom-button">{t('e-magazine')}</Button>
                                                                </div>
                                                                <div className="col">
                                                                    <Button className="custom-button">{t('photo-gallery')}</Button>
                                                                </div>
                                                            </div>
                                                            <div className="row mb-3">
                                                                <div className="col">
                                                                    <Button className="custom-button">{t('policy')}</Button>
                                                                </div>
                                                                <div className="col">
                                                                    <Button className="custom-button">{t('tender')}</Button>
                                                                </div>
                                                                <div className="col">
                                                                    <Button className="custom-button">{t('gem')}</Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Offcanvas.Body>
                                                </Offcanvas>
                                            </div>

                                        </Link>
                                        {/*-------------------------------------Hamburger section -----------------------------------*/}
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;