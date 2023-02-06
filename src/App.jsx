import React from 'react'
import Navbar from './containers/navbar/Navbar'
import Home from './containers/home/Home'
import About from './containers/about/About'
import './styles/index.scss'
import Skills from './containers/skills/Skills'
import Projects from './containers/projects/Projects'
import Contact from './containers/contact/Contact'

function App() {
  return (
    <div className="App gradient__background">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
