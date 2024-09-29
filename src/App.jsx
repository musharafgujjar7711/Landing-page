import React from 'react'
import Navbar from './Components/Navbar'
import Experience from './Components/Experience'
import Webapp from './Components/Webapp'
import Desc from './Components/Desc'
import Footer from './Components/Footer'

function App() {
  return (
    <div >
      <Navbar/>
        <Experience />
        <Webapp/>
        <hr />
         <Desc/>
         <hr />
         <Footer/>
         
    </div>
  )
}

export default App