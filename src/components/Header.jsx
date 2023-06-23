import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <>
            <nav>
                <NavContent setMenuOpen={setMenuOpen}/>
            </nav>

            <button className='navBtn' onClick={() => setMenuOpen(!menuOpen)}>
                <AiOutlineMenu />
            </button>
        </>
    )
}

export const HeaderPhone = ({ menuOpen, setMenuOpen}) => {
    return (
        <div className={`navPhone ${menuOpen ? 'navPhoneComes' : ''}`}>
            <NavContent setMenuOpen={setMenuOpen}/>
        </div>
    )
}

const NavContent = ({setMenuOpen}) => (
    <>
        <h2>Anurag.</h2>
        <div>
            <a onClick={() => setMenuOpen(false)} href="#home">Home</a>
            <a onClick={() => setMenuOpen(false)} href="#worK">WorK</a>
            <a onClick={() => setMenuOpen(false)} href="#timeline">Experience</a>
            <a onClick={() => setMenuOpen(false)} href="#services">Services</a>
            <a onClick={() => setMenuOpen(false)} href="#testimonial">Testimonial</a>
            <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
        </div>

        <a href="mailto:anuragchauhan7042666582@gmail.com">
            <button>Email</button>
        </a>
    </>
)
export default Header