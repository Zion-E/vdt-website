import React from 'react'
import Header from '../components/Header'
import Lower from '../components/Lower'
import Quote from '../components/Quote'

import Aboutvdt from '../components/Aboutvdt'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import Navigate from '../components/Navbar/Navigate'
import Aboutdash from '../components/About/Aboutdash'
import imageUrl from '../pictures/VDTComplete/Rectangle 2.png'

const About = () => {

  const breadCrumbTitle = 'ABOUT US';
  const breadCrumbSubtitle = 'About VDT';

  return (
    <div>
        <Navigate />
        {/* <Aboutdash /> */}
        <Breadcrumb breadCrumbTitle={breadCrumbTitle} 
        breadCrumbSubtitle={breadCrumbSubtitle}
        imageUrl={imageUrl}
        />
        <Aboutvdt />
        <Quote />
        <Lower />
    </div>
  )
}

export default About