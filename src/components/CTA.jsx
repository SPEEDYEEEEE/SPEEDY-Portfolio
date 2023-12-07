import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Want to build a project? <br className='sm:block hidden'/>Let's build it together!</p>
        <Link to="/contact" className='btn'> Let's Do It !!! (☞ ͡° ͜ʖ ͡°)☞</Link>
    </section>
  )
}

export default CTA