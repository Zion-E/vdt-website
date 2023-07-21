import React, { useEffect } from 'react';
// import './Mobilenav'
// import './Owlcarousel'
// import 'owl.carousel';
import './Navigate.css'
import '../assets/icons/style.css'
import '../assets/css/style.css'
import { Link } from 'react-router-dom';
import Vdtlogo from '../../pictures/iconLogo/Rectangle 1.png'
import vdtbackground from '../../pictures/iconLogo/logocurve.png'
import phonecall from '../../pictures/iconLogo/Group 195.png'

const MainHeader: React.FC = () => {

    

  return (
    <header className="main-header clearfix">
      <div className="main-header__top">
        <div className="container">
          <div className="main-header__top-inner">
            <div className="main-header__top-address">
              <ul className="list-unstyled main-header__top-address-list">
                <li>
                  <i className="icon-call">
                    <span>CALL</span>
                  </i>
                  <div className="text">
                    <p>Consult our Agent</p>
                  </div>
                </li>
                <li>
                  <i className="icon">
                    <span className="icon-pin"></span>
                  </i>
                  <div className="text">
                    <p>7th Floor, Leadway Marble House, 1, Alfred Rewane Road</p>
                  </div>
                </li>
                <li>
                  <i className="icon">
                    <span className="icon-email"></span>
                  </i>
                  <div className="text">
                    <p>
                      <a href="#">needhelp@vdtcomms.com</a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="main-header__top-right">
              <div className="main-header__top-menu-box"></div>
              <div className="main-header__top-social-box">
                <div className="main-header__top-social">
                  <a href="#">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="main-menu clearfix">
        <div className="main-menu__wrapper clearfix">
          <div className="container">
            <div className="main-menu__wrapper-inner clearfix">
              <div className="main-menu__left">
                <div className="main-menu__logo">
                  <a href="#">
                    <img src={Vdtlogo} alt="" className="main-menu__logo-size" />
                  </a>

                </div>
                <div className="main-menu__main-menu-box">
                  <div className="main-menu__main-menu-box-inner">
                    <a href="#" className="mobile-nav__toggler">
                      <i className="fa fa-bars"></i>
                    </a>
                    <ul className="main-menu__list">
                      <li>
                        <Link to='../../pages/Home'>
                            <a>Home</a>
                        </Link>
                      </li>
                      <li className="dropdown">
                        <a href="#">About Us</a>
                        <ul>
                          <li>
                            <Link to='../../pages/About'>
                                <a>About Us</a>
                            </Link>
                          </li>
                          <li>
                            <Link to='../../pages/Team'>
                                <a>Our Team</a>
                            </Link>
                          </li>
                          <li>
                            <Link to='../../pages/Award'>
                                <a>Award & Certification</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to='../../Pages/Newsupdates'>
                            <a>News & Update</a>
                        </Link>
                      </li>
                      <li className="dropdown">
                        <a href="#">Services</a>
                        <ul>
                          <li>
                            <Link to='../../Pages/Servicesection'>
                                <a>Service</a>
                            </Link>
                          </li>
                          <li>
                            <a href="#">Our Team</a>
                          </li>
                          <li>
                            <a href="#">Award & Certification</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Pages</a>
                        <ul>
                          <li>
                            <Link to='../../pages/FAQs'>
                                <a>FAQ</a>
                            </Link>
                          </li>
                          <li>
                            <Link to='../../pages/Error'>
                                <a href="#">404 Error Page</a>
                            </Link>
                          </li>
                          <li>
                            <Link to='../../Pages/Typography'>
                                <a>Typography</a>
                            </Link>
                          </li>
                          <li>
                            <Link to='../../pages/Gallery'>
                                <a>Gallery</a>
                            </Link>
                          </li>
                          <li>
                            <Link to='../../Pages/Testimonial'>
                                <a>Testimonial</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Contact Us</a>
                        <ul>
                          <li>
                            <Link to='../../Pages/Contactview'>
                                <a>Contact Us</a>
                            </Link>
                          </li>
                          <li>
                            <Link to='../../pages/Supportpage'>
                                <a>Support</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="main-menu__right">
                <div className="main-menu__call">
                  <div className="main-menu__call-icon">
                    <img src={phonecall} alt='' />
                  </div>
                  <div className="main-menu__call-content">
                    <p>PHONE</p>
                    <a href="tel:07000000000">070 8000 8000</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="mobile-nav__wrapper">
      <div className="mobile-nav__overlay mobile-nav__toggler"></div>
      {/* /.mobile-nav__overlay */}
      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler">
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <a href="index.html" aria-label="logo image">
            <img src="assets/images/logo-2.png" width="143" alt="" />
          </a>
        </div>
        {/* /.logo-box */}
        <div className="mobile-nav__container"></div>
        {/* /.mobile-nav__container */}

        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href="mailto:needhelp@packageName__.com">needhelp@vdtcomms.com</a>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <a href="tel:070-0000-0000">070 0000 0000</a>
          </li>
        </ul>
        {/* /.mobile-nav__contact */}
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            <a href="#" className="fab fa-facebook-square"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-linkedin-in"></a>
          </div>
          {/* /.mobile-nav__social */}
        </div>
        {/* /.mobile-nav__top */}
      </div>
      {/* /.mobile-nav__content */}
    </div>
    </header>
  );
};

export default MainHeader;
