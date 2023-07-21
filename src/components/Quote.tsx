import React from 'react'
import solut from '../pictures/VDTLTE/sme-solution.png'
import quoteimg from '../pictures/VDTComplete/Rectangle 383.png'
import './Quote.css'
import service1 from '../pictures/iconLogo/vision.png'
import service2 from '../pictures/iconLogo/mission.png'
import service3 from '../pictures/iconLogo/value.png'
import service4 from '../pictures/iconLogo/Group 68.png'

const Quote = () => {
    return (
    <div className='row test1'>
        
        <div className='row'>
            <img src={quoteimg} alt="medal" className='quot'/>
        </div>
        

        <div  className='high'>
        <p className='colon'>“</p><p className='text2'>We are an ISO 9001:2015 certified organization (Certificate #: BN5966/6288:0313) as well as ISO/IEC 20000-2018 certified organization (Certificate # ITMS 621838). This confers the global mark of process quality standard compliance on our ability to meet and exceed customers’ requirements.<span className='colon2'>”</span></p>
        </div>

        <div className="row roww-net">
              
                <div className="col col-nett">
                  <div>
                  <img src={service1} className="img-router1" alt="Responsive image" />
                
                  </div>
                  <div className='es1'>
                  <p className='fonty'>Our Vision</p>
                   <p> To be the provider of world-class communication services for innovative lifestyle </p>
                  </div>
                
                </div>
                <div className="col col-nett">
                  <div>
                  <img src={service2} className="img-router1" alt="Responsive image" />
                
                  </div>
                  <div className='es1'>
                    <p className='fonty'>Our Mission</p>
                   <p>At VDT, we deliver flexible and reliable digital connectivity to people,
                    wherever they live, work and play.</p>
                  </div>
                
                </div>
                <div className="col col-nett">
                <div>
                    <img src={service3} className="img-router" alt="Responsive image" />
                </div>
                <div className='es1'>
                <p className='fonty'>Our Core Values</p>
                    <p>Customer Delight | Teamwork | Integrity | Leadership | Proactiveness| Dilligence</p>
                  </div>
                </div>
                <div className="col col-nett">
                  <div>
                  <img src={service4} className="img-router1" alt="Responsive image" />
                
                  </div>
                  <div className='es1'>
                  <p className='fonty'>Integrated Management System Policy Statement</p>
                    <p>We shall continually up;ift our Service Quality in a safe work environment while 
                    delighting customers.</p>
                  </div>
                
                </div>
            
            </div>

             
    </div>
    )
};

export default Quote
