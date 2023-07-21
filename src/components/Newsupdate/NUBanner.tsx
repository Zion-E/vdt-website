import React from 'react'
import dbanner from '../../pictures/VDTLTE/Rectangle 2.png'
import './NUBanner.css'

const NUBanner = () => {
  return (
    <div className="row-dash" >
        
      <img src={dbanner} alt="back" className='tone' />
    <div className='bt-us'>
    <h2 className='about-us'>NEWS & UPDATES</h2>
    <p className='avdt'>VDT News & Updates</p>
    </div>
    

</div>
  )
}

export default NUBanner