import React from 'react'
import teambanner from '../../pictures/VDTCOMM/Group 704.png'
import './Teambanner.css'

const Teambanner = () => {
  return (
    <div className="row-dash" >
        
      <img src={teambanner} alt="back" className='tone' />
    <div className='bt-us'>
    <h2 className='about-us'>OUR TEAM</h2>
    <p className='avdt'>VDT Team</p>
    </div>
    

</div>
  )
}

export default Teambanner