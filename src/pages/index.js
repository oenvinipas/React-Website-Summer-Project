import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection'
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <Hero />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Services />
        <InfoSection {...homeObjThree}/>
        <Footer />
    </>
  )
}

export default Home