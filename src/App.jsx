import { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Hero from './component/Hero'
import WhyChooseUs from './component/WhyChoose'
import BestService from './component/BestService'
import Partner from './component/Partner'
import Service from './component/Services'
import HowWeWorks from './component/HowWeWork'
import Testimonials from './component/Testimonials'
import Bluesection from './component/Bluesection'
import Faq from './component/Faq'
import Footer from './component/Footer'
import './App.css'

function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <Hero/>
    <WhyChooseUs/>
    <BestService/>
    <Partner/>
    <Service/>
    <HowWeWorks/>
    <Testimonials/>
    <Bluesection/>
    <Faq/>
    <Footer/>
    </>
  )
}

export default App
