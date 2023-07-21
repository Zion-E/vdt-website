import React from 'react'
import Floatchat from '../components/Floatchat'
import Header from '../components/Header'
import Navigate from '../components/Navbar/Navigate'
import Teambanner from '../components/Ourteam/Teambanner'
import Teamupdates from '../components/Ourteam/Teamupdates'
import Lower from '../components/Lower'
import Newteam from '../components/Ourteam/Newteam'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import imageUrl from '../pictures/VDTLTE/promo1 1.png'

const Team = () => {

  const breadCrumbTitle = 'OUR TEAM';
  const breadCrumbSubtitle = 'VDT Team';

  return (
    <div>
        <Floatchat />
        {/* <Header /> */}
        <Navigate />
        {/* <Breadcrumb breadCrumbTitle={breadCrumbTitle} 
        breadCrumbSubtitle={breadCrumbSubtitle}
        imageUrl={imageUrl}
        /> */}
        <Teambanner />
        {/* <Teamupdates /> */}
        <Newteam />
        <Lower />
    </div>
  )
}

export default Team