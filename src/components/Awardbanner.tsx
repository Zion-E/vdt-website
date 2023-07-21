import React from 'react'
import './Awardbanner.css'

import awardbanner from '../pictures/VDTCOMM/Group 704.png'

const Awardbanner = () => {
  return (
    <div className="row-dash" >
        
      <img src={awardbanner} alt="back" className='tone' />
    <div className='bt-us'>
    <h2 className='about-us'>AWARD & CERTIFICATION</h2>
    <p className='avdt'>VDT Award and Certification</p>
    </div>
    

</div>
  )
}

export default Awardbanner