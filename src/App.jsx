import { useState } from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Hero from './component/Hero'
import WhyChooseUs from './component/WhyChoose'
import BestService from './component/BestService'
import Partner from './component/Partner'
import Service from './component/Services'
import HowWeWorks from './component/HowWeWork'
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
    </>
  )
}

export default App
