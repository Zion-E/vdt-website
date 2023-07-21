import React from 'react'
import './Lower.css'
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin} from 'react-icons/fa'
import BTT from '../pictures/iconLogo/Group 144.png'
import headphone from '../pictures/iconLogo/headphones 1.png'
import dchat from '../pictures/iconLogo/conversation (2) 1.png'
import vdtlogo from '../pictures/iconLogo/Rectangle 1.png'
import locate from '../pictures/VDTComplete/Vector.png'
import mail from '../pictures/VDTComplete/Vector (1).png'
import call from '../pictures/VDTComplete/Vector (2).png'
import Backtotop from './Backtotop'

function Lower() {
  return (
    <div className='row row-lower'>
        <div className="row contact-us">
            <div className="col info">
              <div className="col-2"><img src={dchat} alt="" className='doublechat' /></div>
              <div className="col">Contact us at info@vdtcomms.com</div>
            </div>
            <div className="col cont-hot">
              <div className="col-2 c-head"><img src={headphone} alt="" className='headphone'/></div>
              <div className="col">
              <p>Contact our Hotline:<br/>
                0700 8000 8000, 01-2714711, 01-2714712</p>
              </div>
                
            </div>
        </div>
      <div className='vvdt'><img src={vdtlogo} alt="" className='flashlogo' /></div>
        <div className="row wwdo">
          <div className='col col-4'>
            <p>We are an Innovative telecommunications service company</p>
            
            <div className='row building'>
              <p className='finfo'><img src={locate} alt="icon" className='local-icon' />
              7th Floor, Leadway Mable House, 1, Alfred Rewane Road, (Former Kingsway Road), Falomo-Ikoyi, Lagos.
                </p>
            </div>
            
            
            
            <div className='row'>
                <img src={mail} alt='mail' className='local-icon'/><span className='finfo'>info@vdtcomms.com</span></div>
              
              <p>
                <img src={call} alt='call' className='local-icon'/><span className='finfo'>0700 800 8000, 01-2714711,01-211470</span>
              </p>
            </div>
          
          <div className='col col-2'>
            <h6 className='low'>OUR LINKS</h6>
            <div className='low-note'>
            <p>Consumer Code of Practice</p>
            <p>Vendor registration centers</p>
            <p>Bandwidth Utilization</p>
            <p>Right Whistle</p>
            </div>
          </div>
          <div className='col col-2'>
          <h6 className='low'>OUR COMPANY</h6>
          <div className='low-note'>
            <p>our Vision and Values</p>
            <p>About us</p>
            <p>Careers</p>
            <p>Awards</p>
            <p>Our Portfolio</p>
            </div>
          </div>
          <div className='col col-2'>
          <h6 className='low'>INFORMATION</h6>
          <div className='low-note'>
            <p>Terms and Condition</p>
            <p>Privacy Policy</p>
            </div>
          </div>
          <div className='col col-2'>
            <h6 className='low'>OUR COMPANY</h6>
            <div className='low-note'><p>Our Vision and Values</p>
            <p>About us</p>
            <p>Careers</p>
            <p>Awards</p>
            <p>Our Portfolio</p>
            </div>
          </div>
          <div className="soc-link">
          <ul>
                <li><a className='down-link' href="https://facebook.com"><FaFacebook/></a></li>
                <li>
                  <a className='down-link' href="https://instagram.com"><FaInstagram/></a>
                </li>
                <li><a className='down-link' href="https://twitter.com"><FaTwitter/></a></li>
                <li><a className='down-link' href="https://linkedln.com"><FaLinkedin/></a></li>
                </ul>
          </div>
        </div>
        <div className="btl"></div>
        <div className="copyright">
          <p>@2023 Copyright. All rights reserved</p>
        </div>

        <div>
          <Backtotop />
        </div>
        
    </div>
  )
}

export default Lower