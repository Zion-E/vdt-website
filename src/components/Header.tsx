import React from 'react'
import mail from '../pictures/iconLogo/sendmail.png'
import facebook from '../pictures/iconLogo/facebook.png'
import instagram from '../pictures/iconLogo/instagram.png'
import linkedin from '../pictures/iconLogo/linkedin.png'
import twitter from '../pictures/iconLogo/twitter.png'
import location from '../pictures/iconLogo/location.png'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="bground">

        <div className="section">
              <button type="button" className="call">CALL</button>
              Consult Our Agent
        </div>
        <div><p className='dash-line'>|</p></div>
            <div className="addr">
              <img src={location} alt="locate" className='links'/>
              7th floor, Leadway Mable House, 1 Alfred Rowane Road
              Famous road Ikoyi, Lagos.
            </div>
            <div><p className='dash-line'>|</p></div>
            <div className="addrm">
              <img src={mail} alt="fastmail" className='links'/>
              info@mail
            </div>
            <div className="social">
              
                <div className='soc-lin'>
                <div className='li-li'><a href="https://facebook.com"><img src={facebook} alt='facebook' className='links'/></a></div>
                <div className='li-li'>
                  <a href="https://instagram.com"><img src={instagram} alt='ig' className='links'/></a>
                </div>
                <div className='li-li'><a href="https://twitter.com"><img src={twitter} alt='twitter' className='links'/></a></div>
                <div className='li-li'><a href="https://linkedln.com"><img src={linkedin} alt='lkin' className='links'/></a></div>
                </div>
              
              </div>

      </div>
    </div>
  )
}

export default Header