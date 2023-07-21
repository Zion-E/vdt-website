import React from 'react'
import './Arrowbanner.css'
import arrowbanner from '../pictures/VDTComplete/Rectangle 2.png'

const Arrowbanner = () => {
  return (
    <div >
      <div className='row'>
        <img src={arrowbanner} alt="arrowbackdrop" className='backdrop' />
      </div> 
    </div>
  )
}

export default Arrowbanner