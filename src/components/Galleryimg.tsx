import React from 'react'
import './Galleryimg.css'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import dimg from '../pictures/VDTCOMM/Rectangle 491.png'
import dimg2 from '../pictures/VDTCOMM/Rectangle 492.png'
import dimg3 from '../pictures/VDTCOMM/Rectangle 493.png'
import dimg4 from '../pictures/VDTCOMM/Rectangle 491 (1).png'
import dimg5 from '../pictures/VDTCOMM/Rectangle 492 (1).png'
import dimg6 from '../pictures/VDTCOMM/Rectangle 493 (1).png'
import dimg7 from '../pictures/VDTCOMM/Rectangle 491 (2).png'
import dimg8 from '../pictures/VDTCOMM/Rectangle 492 (2).png'
import dimg9 from '../pictures/VDTCOMM/Rectangle 493 (2).png'

const Galleryimg = () => {
  return (
    <div className='gallery-page'>
        <div className='row my-tabs'>
            <Tabs
                defaultActiveKey="All"
                id="justify-tab-example"
                className="mb-3"
                justify
                >
                <Tab eventKey="All" title="All">
                    <div className='row all-img'>
                        <div className='col gal-img'>
                            <img src={dimg} alt="image" />
                        </div>
                        <div className='col gal-img'>
                            <img src={dimg2} alt="image" />
                        </div>
                        <div className='col gal-img'>
                            <img src={dimg3} alt="image" />
                        </div>
                        <div className='col gal-img'>
                            <img src={dimg4} alt="image" />
                        </div>
                        <div className='col gal-img'>
                            <img src={dimg5} alt="image" />
                        </div>
                        <div className='col gal-img'>
                            <img src={dimg6} alt="image" />
                        </div>
                        <div className='col gal-img'>
                            <img src={dimg7} alt="image" />
                        </div>
                        <div className='col gal-img'>
                            <img src={dimg8} alt="image" />
                        </div>
                        <div className='col gal-img'>
                            <img src={dimg9} alt="image" />
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="business" title="Business">
                    Tab content for Business
                </Tab>
                <Tab eventKey="Award" title="Awards">
                    Tab content for Awards
                </Tab>
                <Tab eventKey="conference" title="Conference" disabled>
                    Tab content for Conference
                </Tab>
                <Tab eventKey="occasion" title="Occasion" disabled>
                    Tab content for Occasion
                </Tab>
            </Tabs>
        </div>
    </div>
  )
}

export default Galleryimg