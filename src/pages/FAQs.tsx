import React from 'react'
import Navigate from '../components/Navbar/Navigate'
import Header from '../components/Header'
import Floatchat from '../components/Floatchat'
import FAQList from '../components/Inquiries/FAQList'
import Lower from '../components/Lower'
import FAQBanner from '../components/Inquiries/FAQBanner'

const FAQs = () => {
  return (
    <div>
        <Floatchat />
        {/* <Header /> */}
        <Navigate />
        <FAQBanner />
        <FAQList />
        <Lower />
    </div>
  )
}

export default FAQs