import React from 'react'
import './Aboutdash.css'
import tone from '../../pictures/VDTComplete/Rectangle 2.png'

const Aboutdash = () => {
  return (
    <div className="row-dash" >
        
          <img src={tone} alt="back" className='tone' />
            <div className='bt-us'>
            <h2 className='about-us'>About Us</h2>
            <p className='avdt'>About VDT</p>
            </div>
            
        
    </div>
    
  )
}

export default Aboutdash