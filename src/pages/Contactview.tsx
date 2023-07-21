import React from 'react'
import Header from '../components/Header'
import Navigate from '../components/Navbar/Navigate'
import Floatchat from '../components/Floatchat'
import Lower from '../components/Lower'
import Contactus from '../components/Contactpage/Contactus'

const Contactview = () => {
  return (
    <div>
        <Floatchat />
        {/* <Header /> */}
        <Navigate />
        <Contactus />
        <Lower />
    </div>
  )
}

export default Contactview