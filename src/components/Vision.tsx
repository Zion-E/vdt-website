import React from 'react'
import './Vision.css'
import happyfam from '../pictures/VDTLTE/happyfam.png'
import bulleye from '../pictures/mission-icon.jpg'
import vis from '../pictures/iconLogo/vision.png'
import mission from '../pictures/iconLogo/mission.png'
import value from '../pictures/iconLogo/value.png'

const Vision = () => {
  return (
    <div className='container'>
    <div className='row cmv'>
          
      <div className='col fam'>
        <div className='rect-1'></div>
        <img src={happyfam} className='sofa img-fluid' alt="family on sofa" />
        <div className='rect-2'></div>
      </div>
      <div className='col col-anthem'>
        <div className='row vmc'>
          <div className="col-2"><img src={vis} alt="v-icon" className='v-icon' /></div>
          <div className="col"><span className='vmc-text-color'>
          
          <h4 className='main-v'>Our Vision</h4>

          <p>To be the provider of world class communication services for
            for innovation lifestyle. services for
            for innovation lifestyle
          </p></span></div>
          
          
        </div>
        <div className='row our-mission'>
        <div className="col-2"><img src={mission} alt="mission-icon" className='m-icon img-fluid' /></div>
        <div className="col"><span className='our-mission-color'>
        <h4 className='main-m'>Our Mission</h4>
          <p>At VDT, we deliver flexible and reliable digital connectivity to people, wherever they live, work and play.
          </p></span>
        </div>
        
        </div>
        <div className='row our-value'>
          <div className="col-2"><img src={value} alt="value-icon" className='value-icon' /></div>
          <div className="col"> <span className='our-value-color'>
        <h4 className='main'>Our Core Values</h4>
          <p>Customer Delight I Teamwork I Integrity I Leadership I Pro-activeness I Diligence
          </p>
          </span></div>
        </div>
      
      </div>
    </div>
    </div>
  )
};

export default Vision
