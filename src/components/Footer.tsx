import React from 'react'
import './Footer.css'
import mail from '../pictures/VDTCOMM/emaillady.png'


function Footer() {
  return (
    <div className='row foot'>
        <div className="col col-5 sub">
            <div className='sub-call'>
                <p>Subscribe to get the latest</p>
                <p>VDTCOMMS Services</p>
            </div>
            <div className='footnote'>
            “Consectetur adipiscing elit velit porta sapien purus erat nec, a ornare 
            laoreet sem gravida accumsan in commodo aliquet nascetur maecenas. Sem tempus hendrerit diam mauris 
            </div>
            <div>
                <form className='e-form'>
                    <div className="form-control">
                        <input type="email" className="email-input " value='Enter your email address'/>
                        <input type='submit' className='subscribe-key' value='Subscribe'/>
                    </div>
                </form>
            </div>
            
        </div>
        <div className="col col-5">
            <div>
                <img src={mail} alt="emaillady" className='maillady img-fluid' />
            </div>
        </div>
    </div>
  )
}

export default Footer