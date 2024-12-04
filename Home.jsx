import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import VideoPopup from '../components/VideoPopup'

const Home = () => {
  return (
    <div>
      <Hero />
      <div>
      <VideoPopup/>
      </div>
    </div>
    
  )
}

export default Home
