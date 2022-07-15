import React from 'react'
import mePng from '../assets/mePng.png'
import Footer from '../components/Footer'
import NavbarC from '../components/Navbar'

function Resources() {
  return (
    <>
    <NavbarC />
    <div className="costruzione">
        <img src={mePng} classname="mypfp-2"/>
        <p class="costr">This section is under construction, come back later please :)</p>
    </div>
    {/* <Footer /> */}
    </>
  )
}

export default Resources