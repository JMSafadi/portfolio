import React from 'react'
import Navbar from './containers/navbar/Navbar'
import Home from './containers/home/Home'
import About from './containers/about/About'
import './styles/index.scss'
import Skills from './containers/skills/Skills'
import Projects from './containers/projects/Projects'
import Contact from './containers/contact/Contact'
import WhyMe from './containers/whyMe/whyMe'

function App() {
  return (
    <div className="App gradient__background">
      <Navbar/>
      <Home/>
      <About/>
      {/* <Skills/> */}
      <Projects/>
      <WhyMe/>
      <Contact/>
    </div>
  )
}

export default App
