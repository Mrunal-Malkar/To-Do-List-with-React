import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
        <nav className='w-screen  text-white bg-[#127475] flex items-center justify-around p-3'>
            <h2 className="text-2xl">iTask</h2>
            <ul className="flex items-center justify-around gap-14">
                <li className='font-extrabold'>Home</li>
                <li>My-Tasks</li>
            </ul>
        </nav>
  )
}

export default Navbar
