import React from 'react'
import './Support.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import helpicon from '../pictures/VDTCOMM/Vector.png'
import helpicon2 from '../pictures/VDTCOMM/Mask group.png'
import helpicon3 from '../pictures/VDTCOMM/fluent-emoji-high-contrast_newspaper.png'
import helpicon4 from '../pictures/VDTCOMM/Vector (1).png'
import helpicon5 from '../pictures/VDTCOMM/Vector (2).png'
import helpicon6 from '../pictures/VDTCOMM/Vector (3).png'
import helpicon7 from '../pictures/VDTCOMM/Vector (4).png'
import helpicon8 from '../pictures/VDTCOMM/Vector (5).png'
import tabsearch from '../pictures/VDTCOMM/tabler_search.png'

const Support = () => {
  return (
    <div className='row e-support'>
        <div className='row support-road'>
        <div className='row on-support'>
            <h1 className='TSSST'>The Self-service support team</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Quis ipsum suspendisseLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </p>

                <div className='input-form'>
                    <InputGroup className="mb-3">
                            <Form.Control
                        placeholder="Search the Knowledgebase..."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2" />
                            <Button variant="outline-secondary" className='search-var-but' id="button-addon2">
                                <img src={tabsearch} alt="search" /> Search
                            </Button>
                    </InputGroup>
                </div>
        </div>
        </div>

        <div className='row welcome'>
            <h6 className='serve-best'>BEST IT SERVICE</h6>
            <h1 className='hp-sp'>Help & Support</h1>
            <p className='welcome-vdt'>
                Welcome to VDT's help and support page. Pick a category to get started.
            </p>

            <div className='row helpopt'>
                <div className="col helplist">
                    <div className='helpicon'><img src={helpicon} alt="" /></div>
                    <div>Knowledge Base</div>
                </div>
                <div className="col helplist">
                <div className='helpicon'><img src={helpicon2} alt="" /></div>
                    Forum
                </div>
                <div className="col helplist">
                <div className='helpicon'><img src={helpicon3} alt="" /></div>
                    News
                </div>
                <div className="col helplist">
                <div className='helpicon'><img src={helpicon4} alt="" /></div>
                    Your Account
                </div>
            </div>
            <div className='row helpopt'>
                <div className="col helplist">
                <div className='helpicon'><img src={helpicon5} alt="" /></div>
                    Payment
                </div>
                <div className="col helplist">
                <div className='helpicon'><img src={helpicon6} alt="" /></div>
                    Package
                </div>
                <div className="col helplist">
                <div className='helpicon'><img src={helpicon7} alt="" /></div>
                    Broadband
                </div>
                <div className="col helplist">
                <div className='helpicon'><img src={helpicon8} alt="" /></div>
                    Email guides
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Support