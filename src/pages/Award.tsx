import React from 'react'
import Floatchat from '../components/Floatchat'
import Header from '../components/Header'
import Navigate from '../components/Navbar/Navigate'
import Teambanner from '../components/Ourteam/Teambanner'
import Lower from '../components/Lower'
import Awardbanner from '../components/Awardbanner'

const Award = () => {
  return (
    <div>
        <Floatchat />
        {/* <Header /> */}
        <Navigate />
        <Awardbanner />
        <Lower />
    </div>
  )
}

export default Award