import React from 'react'
import About_Hero from './About_Hero'
import About_Section2 from './About_Section2'
import About_Section3 from './About_Section3'
import About_Section4 from './About_Section4'
import Home_Section4 from '../Home/Home_Section4'
import About_Section6 from './About_Section6'
import About_Section5 from './About_Section5'
import Faq from './Faq'

const About = () => {
  return (
    <div>
        <About_Hero/>
        <About_Section2/>
        <About_Section3/>
        <About_Section4/>
        <Home_Section4/>
        <About_Section5/>
        <About_Section6/>
        <Faq/>
    </div>
  )
}

export default About