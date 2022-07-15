import React from 'react'
import Linkedin from '../assets/Linkedin.svg'
import Github from '../assets/Github.svg'
import Behance from '../assets/Behance.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="left-footer">
            <h6>© 2022 Omar Jabraoui. All Rights Reserved.</h6>
        </div>
        <div className="right-footer">
            <a href="https://www.linkedin.com/in/omarjab/" target="_blank"><img src={Linkedin}/></a>
            <a href="https://github.com/omarjab01" target="_blank"><img src={Github} className="mid-img" /></a>
            <a href="https://www.behance.net/omarjab" target="_blank"> <img src={Behance} /> </a>
        </div>
    </footer>
  )
}

export default Footer