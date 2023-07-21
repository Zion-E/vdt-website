import React from 'react'
import './Servicetext.css'
import arrowbanner from '../../pictures/VDTComplete/Rectangle 2.png'

const Servebanner = () => {
  return (
    <div className="row-dash" >
        
      <img src={arrowbanner} alt="back" className='tone' />
    <div className='bt-us'>
    <h2 className='about-us'>SERVICES</h2>
    <p className='avdt'>VDT Services</p>
    </div>
    

</div>
  )
}

export default Servebanner