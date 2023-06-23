import React from 'react'
import user from '../assets/user (2).png'

const Testimonial = () => {
  return (
    <div id='testimonial'>
        <h2>Testimonial</h2>

        <section>
            <TestimonialCard
                name={"Anurag"}
                feedback={"You are the excellent programmer, i've ever seen."}
            />
            <TestimonialCard
                name={"Ramzi"}
                feedback={"Wow what a portfolio, doesn't expected this from you."}
            />
            <TestimonialCard
                name={"Sunder Pichai"}
                feedback={"Amazing seems like i should retire and you should take over."}
            />
        </section>
    </div>
  )
}

export default Testimonial

const TestimonialCard = ({name, feedback})=>(
    <article>
        <img src={user} alt="User" />
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)
