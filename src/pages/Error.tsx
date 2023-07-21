import React from 'react'
import Mainslider from '../components/Mainslider/Mainslider'
import notfound from '../pictures/VDTLTE/Page Not Found.png'
import Errorpage from '../components/ErrorPage'
import Navigate from '../components/Navbar/Navigate'

const Error = () => {
  return (
    <div>
        {/* <Header /> */}
        {/* <Navigate /> */}
        <Navigate />
        <Errorpage />
        <Mainslider/>
    </div>
  )
}

export default Error