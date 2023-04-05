import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='container py-5 my-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className='text-dark fw-bold mb-4'>About US</h1>
                    <p className='lead mb-4'>
                        NishFashion is helped to establish by Since 2009 we have been venturing to the far corners of the planet together, sorting out parts of our riddle to make a special neighborhood look for the nearby individuals of Manchester and an online goal store for guests around the world.
                        Working with directional brands based on craftsmanship, quality, effortlessness, our cautiously curated accumulation of menswear, womenswear, and NishFashion for the home have been by and by hand-sourced by us. We just pick pieces to be a piece of our NishFashion family since we adore them, would wear them ourselves, and would be glad to have them in our home.

                        Supporting little autonomous organizations like us is the core of NishFashion ethos. We trust you appreciate perusing through our mindfully thought-about range, and on the off chance that you are consistently visiting the little verdant suburb known as Chorlton, do fly in and make proper acquaintance!

                        We anticipate seeing you,


                    </p>
                    <Link to="/contact" className='btn btn-outline-dark px-3'>Contact US</Link>
                </div>
                <div className='col-md-6 d-flex justify-content-center'>
                    <img src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt='About Us' height={"600px"} width={"500px"}/>
                </div>
            </div>

        </div>
    )
}

export default About