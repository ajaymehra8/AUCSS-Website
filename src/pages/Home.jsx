import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/HeroSection/HeroSection'
import Footer from '../components/Footer'


function Home() {
  return (
    <div className='w-full h-screen relative'>
      <Navbar />
      <HeroSection/>
      <Footer/>
    </div>
  )
}

export default Home