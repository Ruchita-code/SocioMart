import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const Plans = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30 max-md:px-4'>
        <div className='text-center'>
            <h2 className='text-gray-700 text-4xl fomnt-semibold'>Choose Yur Plan </h2>
            <p classNmae='text-gray-500 text-sm max-w-md mx-auto'>Get started with a free plan and scale as your presence grows. Find the plan that best suits your content creation objectives.</p>

        </div>
        <div className='mt-14'>
            <PricingTable /> 
        </div>
      
    </div>
  )
}

export default Plans
