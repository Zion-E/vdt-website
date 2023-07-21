import React from 'react'
import vdtlogo from '../pictures/iconLogo/Rectangle 1.png'
import phonecall from '../pictures/iconLogo/Group 195.png'
import './Navigate.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Link } from 'react-router-dom';


const Navigate = () => {
  return (

<div className='row hans'>

<div className="row home-level">
  <div className="col-1 vdt">
     <img src={vdtlogo} alt="vdt" className='vdtlogo'/>
    </div>
    <div className='col-8 home-bar'>
    <ul className="nav justify-content-center">
    <li className="nav-item">
                    <Link 
                      to='../pages/Home'>
                        <span className='home-color nav-link'>Home</span></Link>
    </li>
      
      <li className='drop-nav'>

          <DropdownButton id="dropdown-basic-button" title="About Us" className='drop-button'>
            <Dropdown.Item>
              <Link to='../pages/About'>
                <span className='home-color'>About</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='../pages/Team'>
                <span className='home-color'>Our Team</span>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item href='../pages/Award'>
              <span className='home-color'>Award & Certifiction</span>
            </Dropdown.Item>
          </DropdownButton>        
        </li>

        <li className="nav-item">
                  <Link className='nav-link home-color'
                to='../Pages/Newsupdates'><span className='home-color'>News & Update</span></Link>
        </li>
              
        <li className="nav-item dropdown">
          <DropdownButton id="dropdown-basic-button" title="Services" className='drop-button'>
            <Dropdown.Item href='../pages/Servicesection'>
              <span className='home-color'>Services</span>
            </Dropdown.Item>
          </DropdownButton>
        </li>
        
        <li className="nav-item dropdown">
          <DropdownButton id="dropdown-basic-button" title="Pages" className='drop-button'>
            <Dropdown.Item href='../pages/FAQs'>
              <span className='home-color'>FAQ</span>
            </Dropdown.Item>
            <Dropdown.Item href='../pages/Error'>
              <span className='home-color'>404 Error Page</span>
            </Dropdown.Item>
            <Dropdown.Item href='../Pages/Typography'>
              <span className='home-color'>Typography</span>
            </Dropdown.Item>
            <Dropdown.Item href='../pages/Gallery'>
              <span className='home-color'>Gallery</span>
            </Dropdown.Item>
            <Dropdown.Item href='../Pages/Testimonial'>
              <span className='home-color'>Testimonials</span>
            </Dropdown.Item>
          </DropdownButton>
        </li>
        
        <li className="nav-item dropdown">
          <DropdownButton id="dropdown-basic-button" title="Contact Us" className='drop-button'>
            <Dropdown.Item href='../Pages/Contactview'>
              <span className='home-color'>Contact Us</span>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to='../pages/Supportpage'>
                <span className='home-color'>Support</span>
              </Link>
            </Dropdown.Item>
          </DropdownButton>
        </li>

      </ul>
    </div>



    <div className='col-1 col-dial'>
      <div className="col"><img src={phonecall} alt="" className='p-icon'/></div>
      <div className="col"><span className='phone-colon'>PHONE: </span><br/><span className='phone-number'>08087654321</span></div>

    </div>
  </div>
</div>

  )
}

export default Navigate