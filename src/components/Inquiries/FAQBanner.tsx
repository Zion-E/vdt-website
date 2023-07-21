import React from 'react'
import arrowbanner from '../../pictures/VDTComplete/Rectangle 2.png'
import './FAQBanner.css'

const FAQBanner = () => {
  return (
    <div className="row-dash" >
        
          <img src={arrowbanner} alt="back" className='tone' />
            <div className='bt-us'>
            <h2 className='about-us'>FAQs</h2>
            <p className='avdt'>VDT FAQs</p>
            </div>
            
        
    </div>
  )
}

export default FAQBanner