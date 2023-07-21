import React from 'react'
import Floatchat from '../components/Floatchat'
import Header from '../components/Header'
import Navigate from '../components/Navbar/Navigate'
import Lower from '../components/Lower'
import Support from '../components/Support'
import FAQList from '../components/Inquiries/FAQList'

const Supportpage = () => {
  return (
    <div>
        <Floatchat />
        {/* <Header /> */}
        <Navigate />
        <Support />
        <FAQList />
        <Lower />
    </div>
  )
}

export default Supportpage