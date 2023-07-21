import React from 'react'
import './Teamupdates.css'
import posture2 from '../../pictures/VDTCOMM/posture.png'
import posture from '../../pictures/VDTCOMM/Group 81.png'
import posture3 from '../../pictures/VDTCOMM/VDT004_Tunji_Gafaar-1-350x250 1 (1).png'
import posture4 from '../../pictures/VDTCOMM/VDT004_Tunji_Gafaar-1-350x250 1 (2).png'
import posture5 from '../../pictures/VDTCOMM/VDT004_Tunji_Gafaar-1-350x250 1 (3).png'
import posture6 from '../../pictures/VDTCOMM/VDT004_Tunji_Gafaar-1-350x250 1 (4).png'

const Teamupdates = () => {
  return (
    <div className='row News'>
        <div className="row dane">
            <div className='grid col col-pic'>
                <img src={posture} alt="team" className='picture-border'/>
                <p className='c-man'>CHAIRMAN</p>
                <p className='naming'>Tunji Gafaar</p>
            </div>
            <div className='grid col col-pic'>
                <img src={posture2} alt="team" className='picture-border' />
                <p className='c-man'>CHAIRMAN</p>
                <p className='naming'>Tunji Gafaar</p>
            </div>
            <div className='grid col col-pic'>
                <img src={posture3} alt="team" className='picture-border' />
                <p className='c-man'>CHAIRMAN</p>
                <p className='naming'>Tunji Gafaar</p>
            </div>
        </div>
        <div className="row dane">
            <div className='grid col col-pic'>
                <img src={posture4} alt="team" className='picture-border' />
                <p className='c-man'>CHAIRMAN</p>
                <p className='naming'>Tunji Gafaar</p>
            </div>
            <div className='grid col col-pic'>
                <img src={posture5} alt="team" className='picture-border' />
                <p className='c-man'>CHAIRMAN</p>
                <p className='naming'>Tunji Gafaar</p>
            </div>
            <div className='grid col col-pic'>
                <img src={posture6} alt="team" className='picture-border' />
                <p className='c-man'>CHAIRMAN</p>
                <p className='naming'>Tunji Gafaar</p>
            </div>
            
        </div>
    </div>
  )
}

export default Teamupdates