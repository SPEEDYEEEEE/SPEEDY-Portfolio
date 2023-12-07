import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header className='header'>
            <NavLink to='/' className="h-10 w-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className='blue-gradient_text'>SP</p>
            </NavLink>
            <nav className='flex text-lg gap-7 font-medium'>
                <NavLink to="/about" className={({isActive}) => isActive ? 'blue-gradient_text' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? 'blue-gradient_text' : 'text-black'}>
                    Projects
                </NavLink>
            </nav>
        </header>
    </div>
  )
}

export default Navbar
