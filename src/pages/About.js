import React from 'react'
import NavbarC from '../components/Navbar'
import omarJab from '../assets/omarjab.jpg'
import Footer from '../components/Footer'
import SkillCard from '../components/SkillCard'
import DesignCard from '../components/DesignCard'

function About() {
  return (
    <>
    <NavbarC />
    <div className="row margin-about">
            <div className="col left-about">
                <img src={omarJab} className="img-about"/>
            </div>
            <div className="col right-about">
                <div className="info">
                    <h2 class="wee">More about me</h2>
                    <p>
                        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”
                        As Cicero would put it, “Um, not so fast.”
                        The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
                    </p>
                </div>
                {/* href button maybe */}
                <button>Download CV</button>
            </div>
    </div>
    <div className="skills">
        <div className="left-skills skillsvarie">
            <SkillCard />
        </div>
        <div className = "right-skills skillsvarie">
            <DesignCard />
        </div>
    </div>
    <Footer />
    </>
    
  )
}

export default About