import React from 'react'
import './Services.css';
import service1 from '../pictures/VDTLTE/corporate-internet.png';
import service2 from '../pictures/VDTLTE/sme-solution.png';
import service3 from '../pictures/VDTLTE/retail-internet.png';
import service4 from '../pictures/VDTCOMM/worldwide 1.png';


import FaDropbox from '../pictures/VDTComplete/Dropbox_logo_2017.png'
import Slack from '../pictures/VDTComplete/Slack_Technologies_Logo.png'


const Services = () => {
  return (
    <div className="container">
        
        <div className='client'>
            Clients and Companies Partnered With
        </div>
        <div className='row-drop'>
          <h2>
          <ul>
          <li className='companies'><img src={FaDropbox} className='fadrop'/></li>
            <li className='companies'><img src={Slack} className='slack'/></li>
            <li className='companies'><img src={FaDropbox} className='fadrop'/></li>
            <li className='companies'><img src={Slack} className='slack'/></li>
            <li className='companies'><img src={FaDropbox} className='fadrop'/></li>
            <li className='companies'><img src={Slack} className='slack'/></li>
          </ul>
          </h2>
        </div>
        <div className='SWO'>
            <h6 className='BIT'>BEST IT SERVICES</h6>
            <h4 className='offer'>Services We're Offering</h4>
            
            <div className="row row-net">
              
                <div className="col col-net">
                  <div>
                  <img src={service4} className="img-router1 img-fluid" alt="Responsive image" />
                
                  </div>
                  <div className='es1'>
                    Enterprise Solution
                  </div>
                
                </div>
                <div className="col col-net">
                  <div>
                  <img src={service1} className="img-router img-fluid" alt="Responsive image" />
                
                  </div>
                  <div className='es2'>
                    Corporate Internet
                  </div>
                
                </div>
                <div className="col col-net">
                <img src={service2} className="img-router img-fluid" alt="Responsive image" />
                <div className='es2'>
                    smeSolutions
                  </div>
                </div>
                <div className="col col-neti">
                  <div>
                  <img src={service3} className="img-router3 img-fluid" alt="Responsive image" />
                
                  </div>
                  <div className='es3'>
                    Retail Internet (Home)
                  </div>
                
                </div>
            
            </div>          
        </div>
    </div>
  )
}

export default Services