import React from 'react'
import Hero from '../Component/Hero/Hero.jsx'
import Popular from '../Component/Popular/Popular.jsx'
import Offer from '../Component/Offers/Offer.jsx'
import NewCollection from '../Component/NewCollections/NewCollection.jsx'
import { NewsLetter } from '../Component/NewsLetter/NewsLetter.jsx'


const Shop = () => {
  return (
    <div>
     <Hero/>
     <Popular/>
     <Offer/>
     <NewCollection/>
     <NewsLetter/>
    </div>
  )
}

export default Shop
