import React from 'react'
import Header from '../components/Header'
import Navigate from '../components/Navbar/Navigate'
import Gallerywall from '../components/Gallerywall'
import Galleryimg from '../components/Galleryimg'
import Lower from '../components/Lower'
import Floatchat from '../components/Floatchat'

const Gallery = () => {
  return (
    <div>
        <Floatchat />
        {/* <Header /> */}
        <Navigate />
        <Gallerywall />
        <Galleryimg />
        <Lower />
    </div>
  )
}

export default Gallery