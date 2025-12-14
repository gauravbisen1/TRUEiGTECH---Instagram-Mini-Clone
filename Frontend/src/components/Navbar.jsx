import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md fixed top-0 left-0 w-full z-10'>
        <div className='max-w-6xl mx-auto flex items-center justify-between px-6 py-3'>
            <h1 className='text-2xl font-bold text-gray-800'>Instagram</h1>
            <div className='flex space-x-6 text-gray-600 text-xl'>
            <i className="fa-solid fa-house text-gray-800 cursor-pointer"></i>
            <i className="fa-solid fa-magnifying-glass text-gray-800 cursor-pointer"></i>
            <i className="fa-solid fa-compass text-gray-800 cursor-pointer"></i>
            <i className="fa-regular fa-heart text-gray-800 cursor-pointer"></i>
            <i className="fa-solid fa-user text-gray-800 cursor-pointer"></i>
            </div>
        </div>
    </nav>
  )
}

export default Navbar