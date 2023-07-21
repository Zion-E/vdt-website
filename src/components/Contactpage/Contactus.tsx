import React from 'react'
import './Contactus.css'
import call from '../../pictures/iconLogo/carbon_phone-filled.png'
import mail from '../../pictures/iconLogo/ri_mail-send-fill.png'
import pin from '../../pictures/iconLogo/ic_baseline-location-on.png'
import site from '../../pictures/iconLogo/Capture1 1 (1).png'
import ring from '../../pictures/iconLogo/phonecontact.png.png'
import consult from '../../pictures/iconLogo/consultus.png'

const Contactus = () => {
  return (
    <div className='row question'>

      <div>
        <div className='row '>
          <img src={ring} alt='' className='callTelephone'/>
         
            <p className='local-call'> CONTACT US</p>
            <p className='local-call-2'>Contact us at VDT</p>
          
        </div>
      </div>
      
      <div className='row details'>
        <div className='col'>
          <p className='got-que'>Have Questions? Contact with us Anytime</p>
          <p>Feel free to talk to our online representative at any time you please using our Live Chat system on our website. 
            Please be patient while waiting for a response. (24/7 Support!)</p>
          <div className='reaching'>
            <img src={call} alt='phone' className='det-icons'/>
            <span className='det-text'>CALL ANYTIME <br/>
                  0700 8000 8000 01-2714711, 01-2714712</span>
          </div>
          <div className='reaching'>
            <img src={mail} alt='email' className='det-icons'/>
            <span className='det-text'>SEND EMAIL <br/> info@vdtcomms.com
            </span>
          </div>
          <div className="reaching">
            <img src={pin} alt='location' className='det-icons'/>
                <span className='det-text'>VISIT ANYTIME <br/> 7th Floor, Leadway Mable House, 1, Alfred Rewane Road, 
                (Former Kingsway Road), Falomo-Ikoyi, Lagos.</span>
          </div>
        </div>

        <div className='col'>
        <form className='form-detail'>
          <div className="form-group">
            
            <input type="text" className="form-control" placeholder='Your Name' />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder='Email Address' />
          </div>
          <div className="message">
            <input type="text" placeholder='Your Message' className='message2'/>
          </div>
          <button type="submit" className="message-btn">Send a Message</button>
        </form>

      
        </div>
      </div>
      <div className="row locate-us">
        <div className="col map">
          <img src={site} className='img-fluid' alt="site map" />
        </div>
        <div className="col-4 free-talk">
          <p className='talk-text'>“Feel free to talk to our online representative at any time 
            you please using our Live Chat system on our website. 
            Please be patient while waiting for a response. (24/7 Support!)” 
          </p>
        </div>
      </div>

      <div className='row consulting'>
        <img src={consult} alt="consultation" className='row consulter'/>
        <div className='consult-line'>
        
        <div className='col attend'>
        WE ARE HERE TO ANSWER YOUR QUESTIONS 24/7
        <h2><span className='need-a-con'>NEED A CONSULTATION?</span></h2>
        </div>
        <div className='col-2 talk-consult'>
          Talk with our Consultant
        </div>
      </div>
        
      </div>
    </div>
  )
}

export default Contactus