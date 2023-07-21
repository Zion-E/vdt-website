import React from 'react'
import mast from '../../pictures/VDTCOMM/network mast.png'
import mman from '../../pictures/VDTCOMM/Rectangle 5 (1).png'
import roomnet from '../../pictures/VDTCOMM/network\ room.png'
import vrouter from '../../pictures/VDTCOMM/Rectangle\ 5\ \(3\).png'
import './Serviceoffer.css'
import web from '../../pictures/VDTComplete/worldwide 1.png'
import web1 from '../../pictures/VDTComplete/worldwide 1 (1).png'
import web2 from '../../pictures/VDTComplete/worldwide 1 (2).png'
import web3 from '../../pictures/VDTComplete/worldwide 1 (3).png'

function Serviceoffer() {
  return (
    <div className='row service-main'>
        <div className='row s-section'>
            <span className='bestit'>Best IT Services</span>
            <p className='we-offer'>Services We're Offering</p>
        
            <div className='row offering-row'>
                <div className="col service-solution">
                  <div className='row service-desi'>
                  <div className='service-desi'>
                  <img src={mast} alt='web sign' />
                  </div>
                    <div className='in-pic'>
                      <img src={web} alt='web sign' />
                    </div>
                  </div>
                  <div className='row ser-text'>
                    <p className='ent-sol'>Enterprise Solution</p>
                    <p>At vero eos accusamus et lusto odio digni goikussimos
                      ducimus qui blanp ditis
                    </p>
                    <p className='readmore'>READ MORE</p>
                  </div>
                  <div className='side-style'>
                  </div>
                  <div className='hover-content'>
                    <div className='hover-icon'>
                      <img src={web} alt='web sign' className='icon-move'/>
                    </div>
                    <div className='hover-text'>
                      <h3><a href="#">Corporate Internet</a></h3>
                      <p className='text-hover-text'>At vero eos accusamus et lusto odio digni goikussimos
                      ducimus qui blanp ditis</p>
                      <a className='hover-read-more'>READ MORE</a>
                    </div>
                  </div>
                  
                </div>


                <div className="col service-solution">
                  <div className='row service-desi'>
                  <div className='service-desi'>
                  <img src={mman} alt='web sign' />
                  </div>
                    <div className='in-pic'>
                      <img src={web1} alt='web sign' />
                    </div>
                  </div>
                  <div className='row ser-text'>
                    <p className='ent-sol'>Enterprise Solution</p>
                    <p>At vero eos accusamus et lusto odio digni goikussimos
                      ducimus qui blanp ditis
                    </p>
                    <p className='readmore'>READ MORE</p>
                  </div>
                  <div className='side-style'>
                  </div>
                  <div className='hover-content'>
                    <div className='hover-icon'>
                      <img src={web1} alt='web sign' className='icon-move'/>
                    </div>
                    <div className='hover-text'>
                      <h3><a href="#">Corporate Internet</a></h3>
                      <p className='text-hover-text'>At vero eos accusamus et lusto odio digni goikussimos
                      ducimus qui blanp ditis</p>
                      <a className='hover-read-more'>READ MORE</a>
                    </div>
                  </div>
                  
                </div>


                <div className="col service-solution">
                  <div className='row service-desi'>
                  <div className='service-desi'>
                  <img src={roomnet} alt='web sign' />
                  </div>
                    <div className='in-pic'>
                      <img src={web2} alt='web sign' />
                    </div>
                  </div>
                  <div className='row ser-text'>
                    <p className='ent-sol'>Enterprise Solution</p>
                    <p>At vero eos accusamus et lusto odio digni goikussimos
                      ducimus qui blanp ditis
                    </p>
                    <p className='readmore'>READ MORE</p>
                  </div>
                  <div className='side-style'>
                  </div>
                  <div className='hover-content'>
                    <div className='hover-icon'>
                      <img src={web2} alt='web sign' className='icon-move'/>
                    </div>
                    <div className='hover-text'>
                      <h3><a href="#">Corporate Internet</a></h3>
                      <p className='text-hover-text'>At vero eos accusamus et lusto odio digni goikussimos
                      ducimus qui blanp ditis</p>
                      <a className='hover-read-more'>READ MORE</a>
                    </div>
                  </div>
                  
                </div>

                <div className="col service-solution">
                  <div className='row service-desi'>
                  <div className='service-desi'>
                  <img src={vrouter} alt='web sign' />
                  </div>
                    <div className='in-pic'>
                      <img src={web3} alt='web sign' />
                    </div>
                  </div>
                  <div className='row ser-text'>
                    <p className='ent-sol'>Enterprise Solution</p>
                    <p>At vero eos accusamus et lusto odio digni goikussimos
                      ducimus qui blanp ditis
                    </p>
                    <p className='readmore'>READ MORE</p>
                  </div>
                  <div className='side-style'>
                  </div>
                  <div className='hover-content'>
                    <div className='hover-icon'>
                      <img src={web3} alt='web sign' className='icon-move'/>
                    </div>
                    <div className='hover-text'>
                      <h3><a href="#">Corporate Internet</a></h3>
                      <p className='text-hover-text'>At vero eos accusamus et lusto odio digni goikussimos
                      ducimus qui blanp ditis</p>
                      <a className='hover-read-more'>READ MORE</a>
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Serviceoffer