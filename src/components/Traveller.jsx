import React from 'react'
import Traveler from '../../public/assets/Traveller.jpg'

const Traveller = () => {
  return (
    <div className='lg:pt-[132px] pt-10 '>
        <div className="w-[57px] h-2 bg-[#0872BA] rounded-2xl mb-2 mt-7 mx-auto"></div>
        <h1 className='mb-8 text-center bold'>Perfect for every type of traveler</h1>
        <div className='xl:w-[1153px] mx-auto w-full'>
            <img className='' src={Traveler} alt="traveller" />
        </div>
    </div>
  )
}

export default Traveller