import React from 'react'

const ExpertCart = ({className, src, title, content}) => {
  return (
    <div className={`w-[550px] ${className} py-6 pl-[46px] pr-[90px] rounded-lg border border-[rgba(8,114,186,.2)]`}>
        <div className='h-[70px] w-[70px] px-4 py-3'>
            <img className='object-contain w-full h-full' src={src} alt={src} />
        </div>
        <h4 className='text-2xl font-semibold text-[#1D2939] mb-2 font-monts mt-[18px]'>{title}</h4>
        <p className='font-monts text-[#475467] text-lg leading-[164%]'>{content}</p>
    </div>
  )
}

export default ExpertCart