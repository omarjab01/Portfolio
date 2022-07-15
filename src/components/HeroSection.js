import React from 'react'
import mePng from '../assets/mePng.png'


function HeroSection() {
  return (
    <div className="hero-section">
        <div className="left-side">
            <h1>Hi! i'm Omar Jabraoui</h1>
            <h5 className='title'>Web Developer and Designer</h5>
        </div>
        <div className="right-side">
            <img src={mePng} className="my-pfp"/>
        </div>
    </div>
  )
}

export default HeroSection