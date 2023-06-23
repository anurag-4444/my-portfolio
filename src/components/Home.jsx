import React from 'react'
import { animate, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs'
import me from '../assets/logo.avif'
import { useRef } from 'react'

const Home = ({ ratio }) => {
    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: "0",
                opacity: 1,
            }
        },
    }

    const clientCount = useRef(null)
    const projectCount = useRef(null)

    const animationClientCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed())
        })
    }
    const animationProjectCount = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed())
        })
    }

    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1  {...animations.h1}>
                        Hi, I Am <br /> Anurag Chauhan
                    </motion.h1>

                    <Typewriter
                        options={{
                            strings: ["A Developer", "A Designer", "A Creator"],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: "typewriterpara",
                            cursor: "",
                        }}
                    />

                    <div>
                        <a href="mailto:anuragchauhan7042666582@gmail.com">Hire Me</a>
                        <a href="#work">Projects <BsArrowUpRight /></a>
                    </div>

                    <article>
                        <p>
                            +
                            {ratio < 2 && <motion.span whileInView={animationClientCount} ref={clientCount}></motion.span>}
                        </p>
                        <span>Clients Worldwide</span>
                    </article>

                    <aside>
                        <article>
                            <p>
                                +
                                {ratio < 2 && <motion.span whileInView={animationProjectCount} ref={projectCount}></motion.span>}
                            </p>
                            <span>Projects Done</span>
                        </article>
                        <article data-special>
                            <p>Contact</p>
                            <span>anuragchauhan7042666582@gmail.com</span>
                        </article>
                    </aside>

                </div>
            </section>
            <section>
                <img src={me} alt="Anurag" />
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home