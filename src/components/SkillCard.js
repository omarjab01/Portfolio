import React from 'react'

import html from '../assets/icons-skills/html.svg'
import css from '../assets/icons-skills/css.svg'
import js from '../assets/icons-skills/js.svg'
import react from '../assets/icons-skills/react.svg'
import bootstrap from '../assets/icons-skills/bootstrap.svg'
import java from '../assets/icons-skills/java.svg'
import c from '../assets/icons-skills/c.svg'

function SkillCard() {
  return (
    <div className = "skillCard">
        <div className="titolo-skill">Development</div>
        <div className="skills-images">
            <img src={html} />
            <img src={css} />
            <img src={js} />
            <img src={react} />
            <img src={bootstrap} />
            <img src={java} />
            <img src={c} />
        </div>
    </div>
  )
}

export default SkillCard