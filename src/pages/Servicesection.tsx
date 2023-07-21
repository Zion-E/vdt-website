import React from 'react'
import Floatchat from '../components/Floatchat'
import Service from '../components/Servicepage/service'
import Header from '../components/Header'
import Navigate from '../components/Navbar/Navigate'
import Lower from '../components/Lower'
import Arrowbanner from '../components/Arrowbanner'
import Servicetext from '../components/Servicepage/Servicetext'
import Serviceoffer from '../components/Servicepage/Serviceoffer'

const Servicesection = () => {
  return (
    <div>
        <Floatchat />
        {/* <Header /> */}
        <Navigate />
        {/* <Arrowbanner /> */}
        <Servicetext />
        <Service/>
        <Lower />
    </div>
  )
}

export default Servicesection