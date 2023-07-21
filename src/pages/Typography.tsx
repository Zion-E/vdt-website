import React from 'react'
import Header from '../components/Header'
import Floatchat from '../components/Floatchat'
import Navigate from '../components/Navbar/Navigate'
import ErrorPage from '../components/ErrorPage'
import Lower from '../components/Lower'
import Typo from '../components/Typo'

const Typography = () => {
  return (
    <div>
        <Floatchat />
        {/* <Header /> */}
        <Navigate />
        <Typo />
        <Lower />
    </div>
  )
}

export default Typography