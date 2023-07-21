import React from 'react'
import './Typo.css'
import arrowbanner from '../pictures/VDTComplete/Rectangle 2.png'

const Typo = () => {
  return (
    <div className='typo-page'>
       <div className="row-dash" >
        
        <img src={arrowbanner} alt="back" className='tone' />
          <div className='bt-us'>
          <h2 className='about-us'>TYPOGRAPHY</h2>
          <p className='avdt'>VDT Typography</p>
          </div>
          
      
  </div>
        <div className='center-space'>

        <div className='row sides'>

        <div>
            <h1 className='h1'>Heading One (h1)</h1>
            <p className='heads'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Eius sed, veniam pariatur repudiandae ipsam perspiciatis minus 
                suscipit cumque blanditiis aspernatur quo omnis 
                corrupti velit sequi qui exercitationem nisi amet eaque.</p>
        </div>
        <div>
            <h2 className='h2'>Heading Two (h2)</h2>
            <p className='heads'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Eius sed, veniam pariatur repudiandae ipsam perspiciatis minus 
                suscipit cumque blanditiis aspernatur quo omnis 
                corrupti velit sequi qui exercitationem nisi amet eaque.</p>
        </div>
        <div>
            <h3 className='h3'>Heading Three (h3)</h3>
            <p className='heads'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Eius sed, veniam pariatur repudiandae ipsam perspiciatis minus 
                suscipit cumque blanditiis aspernatur quo omnis 
                corrupti velit sequi qui exercitationem nisi amet eaque.</p>
        </div>
        <div>
            <h4 className='h4'>Heading Four (h4)</h4>
            <p className='heads'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Eius sed, veniam pariatur repudiandae ipsam perspiciatis minus 
                suscipit cumque blanditiis aspernatur quo omnis 
                corrupti velit sequi qui exercitationem nisi amet eaque.</p>
        </div>
        <div>
            <h5 className='h5'>Heading Five (h5)</h5>
            <p className='heads'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Eius sed, veniam pariatur repudiandae ipsam perspiciatis minus 
                suscipit cumque blanditiis aspernatur quo omnis 
                corrupti velit sequi qui exercitationem nisi amet eaque.</p>
        </div>
        <div>
            <h6 className='h6'>Heading Six (h6)</h6>
            <p className='heads'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Eius sed, veniam pariatur repudiandae ipsam perspiciatis minus 
                suscipit cumque blanditiis aspernatur quo omnis 
                corrupti velit sequi qui exercitationem nisi amet eaque.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Typo