import React from 'react'
import Logo from '../../public/assets/Logo.png'

const Navbar = () => {
  return (
    <div  className='xl:container  w-full px-5 py-2 flex items-center justify-between bg-[rgba(244,244,244,.20)] absolute left-1/2 -translate-x-1/2 top-6 rounded-2xl z-50'>
        <div className="logo">
            <img src={Logo} alt="Logo" />
        </div>
        <button className='font-monts font-semibold text-lg text-[#0872BA] px-6 py-2.5 bg-white rounded-xl'>Log in</button>
    </div>
  )
}

export default Navbar