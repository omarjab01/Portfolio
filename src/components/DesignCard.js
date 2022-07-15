import React from 'react'

import figma from '../assets/icons-skills/Figma.svg'
import xd from '../assets/icons-skills/xd.svg'
import photoshop from '../assets/icons-skills/photoshop.svg'
import illustrator from '../assets/icons-skills/illustrator.svg'

function DesignCard() {
  return (
    <div className = "skillCard">
        <div className="titolo-skill">Design</div>
        <div className="skills-images">
            <img src={figma} />
            <img src={xd} />
            <img src={photoshop} />
            <img src={illustrator} />
        </div>
    </div>
  )
}

export default DesignCard