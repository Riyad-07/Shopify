import React from 'react'
import ExpertCart from './layers/ExpertCart'
import e1 from '../../public/assets/ExpartCart/e1.png'

const Expert = () => {
  return (
    <div className='pt-[122px] container'>
        <div className='font-monts leading-[140%] bg-[rgba(8,114,186,.3)] w-[146px] mx-auto py-3 rounded-lg text-center -rotate-[15deg] mb-4'>Why choose us?</div>
        <h2 className='text-center bold '>Why Choose Expat Global Girls</h2>
        <p className='text-xl font-medium font-monts leading-[140%] text-[#344054] text-center mt-5 mb-14'>Empowering women to travel with confidence and ease worldwide</p>
        <div className='flex flex-wrap gap-10'>
            <ExpertCart className='rounded-br-[50px]' src={e1} title='Affordable Housing' content='Save money and travel smarter by sharing accommodations with fellow members.'/>
            <ExpertCart src={e1} title='Affordable Housing' content='Save money and travel smarter by sharing accommodations with fellow members.'/>
            <ExpertCart src={e1} title='Affordable Housing' content='Save money and travel smarter by sharing accommodations with fellow members.'/>
            <ExpertCart src={e1} title='Affordable Housing' content='Save money and travel smarter by sharing accommodations with fellow members.'/>
        </div>
    </div>
  )
}

export default Expert