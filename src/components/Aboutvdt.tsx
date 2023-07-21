import React from 'react'
import cert from '../pictures/VDTComplete/Group 6.png'
import './Aboutvdt.css'
import devices from '../pictures/VDTComplete/Rectangle 384.png'

const Aboutvdt = () => {
  return (
    <div className='tdv'>
        <div className='row pree'>
          <div className="col peep">
            <img src={devices} alt='devices' className='devices img-fluid' />
              <img src={cert} alt="cert" className='cert img-fluid' />

          </div>
          <div className="col deta">
            <p className='best-it-company'>BEST IT COMPANY </p>
            <p className='about-vdt'>About VDT</p>
            <p className='vdt-license'>VDT is a licensed Private Network service provider specializing in the provision of Enterprise Wide Area Network (WAN) and Metropolitan Area Network (MAN) link connectivity using Fiber Optic and Wireless Communication infrastructure and access networks.
            <p className='text-gaps'>We are a leading Broadband communication service provider to corporate organizations with leased Fiber Optic trunks to the thirty-six (36) states in Nigeria and the FCT, with 145 Points-Of-Presence (POP) and counting with localised technical support staffers.</p>
              These network trunks are interconnected with our IP-MPLS technology core at each city to provide today’s largest IP-MPLS network in Nigeria, with the Enterprise edge metro wireless distribution access network offering to numerous Customers. We have been offering this robust service and the Enterprise MPLS/VPN platform provisioning technology to our customers (including other Communication service providers) since year 2001 across the country.</p>
            </div>
      </div>
        
    </div>
  )
}

export default Aboutvdt