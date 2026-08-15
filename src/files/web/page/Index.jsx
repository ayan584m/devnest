import React from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import About from '../component/About'
import Services from '../component/Services'
import Whychooseus from '../component/Whychooseus'
import TechStack from '../component/Techstack'
import Projects from '../component/Projects'
import Team from '../component/Team'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

const Index = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Whychooseus />
      <TechStack/>
      <Projects/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Index
