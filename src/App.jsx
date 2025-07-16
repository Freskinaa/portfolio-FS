import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Edu from './components/Edu/Edu'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Edu/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App