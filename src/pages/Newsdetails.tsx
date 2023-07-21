import React from 'react'
import Header from '../components/Header'
import Navigate from '../components/Navbar/Navigate'
import Newsdetail from '../components/Newsupdate/Newsdetail'
import Lower from '../components/Lower'

const Newsdetails = () => {
  return (
    <div>
        {/* <Header /> */}
        <Navigate />
        <Newsdetail />
        <Lower />
    </div>
  )
}

export default Newsdetails