import React from 'react'
import me from '../assets/3551739.jpg'
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div>
            <img src={me} alt="Founder" />
            <h2>Anurag Chauhan</h2>
            <p>Motivation is temporary, but discipline last forever.</p>
        </div>
        <aside>
          <article>
          <h2>Social Media</h2>
            <a href="/" target='blank'><AiFillInstagram/></a>
            <a href="/" target='blank'><AiFillLinkedin/></a>
            <a href="/" target='blank'><AiFillGithub/></a>
            </article>
        </aside>
        <a href="#home">
            <AiOutlineArrowUp/>
        </a>
    </footer> 
  )
}

export default Footer