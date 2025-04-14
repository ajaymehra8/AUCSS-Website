import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MainPage from '../components/docs/MainPage'
import Footer from '../components/Footer'

const Docs = () => {
  return (
    <div className='w-full min-h-screen relative'>
    <Navbar />
    <MainPage/>
    <Footer/>
  </div>
  )
}

export default Docs
