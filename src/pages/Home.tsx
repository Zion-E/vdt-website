import React from 'react'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Services from '../components/Services'
import Vision from '../components/Vision'
import Floatchat from '../components/Floatchat'
import Testimonies from '../components/Testimonies'
import News from '../components/News'
import Lower from '../components/Lower'
import Footer from '../components/Footer'
import Navigate from '../components/Navbar/Navigate'
import FAQList from '../components/Inquiries/FAQList'
import AliceCarousel from '../components/AliceCarousel'
import Dashslider from '../components/Dashslider'
// import DropdownNavigation from "../components/DropdownNavigation"

const Homepage = () => {

 

  return (
    <div>
        <Floatchat />
        <Navigate />
        {/* <DropdownNavigation items={navigationItems} /> */}
        <Dashboard />
        <Services />
        
        <Vision />
        <Testimonies />
        {/* <AliceCarousel /> */}
        <News />
        <Footer />
        <Lower />

    </div>
  )
}

export default Homepage