import React from 'react'

const TripCart = ({src, headingTitle, content}) => {
  return (
    <div className='w-[271px] md:w-[250px]'>
        <div className='h-[60px] w-[50px]'>
            <img className='h-full w-full object-cover' src={src} alt={src} />
        </div>
        <h4 className='font-monts font-semibold text-2xl text-[#1D2939] mt-3 mb-2'>{headingTitle}</h4>
        <p className='font-monts text-lg leading-[148%] text-[#475467]'>{content}</p>
    </div>
  )
}

export default TripCart