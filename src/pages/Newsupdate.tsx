import React from 'react'
import Header from '../components/Header'
import Navigate from '../components/Navbar/Navigate'
import Floatchat from '../components/Floatchat'
import Lower from '../components/Lower'
import Groupnews from '../components/Newsupdate/Groupnews'
import NUBanner from '../components/Newsupdate/NUBanner'
import NewsPage from '../components/Newsupdate/Newspage'


const Newsupdate = () => {
  return (
    <div>
        <Floatchat />
        {/* <Header /> */}
        <Navigate />
        <NUBanner />
        <NewsPage />
        {/* <Groupnews /> */}
        <Lower />
    </div>
  )
}

export default Newsupdate