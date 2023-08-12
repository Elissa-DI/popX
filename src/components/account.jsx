/* eslint-disable no-unused-vars */
import React from 'react'
import Image from './image'

const account = () => {
  const name = 'Mary Doe';
  const email = 'Marry@gmail.com';
  return (
    <div className='h-screen bg-red-50'>
        <div className='bg-white p-5'>
            <p className='font-medium text-lg'>Account Settings</p>
        </div>
        <div className='p-5 border-b border-dashed border-gray-500'>
            <div className='flex'>
              <div>
                <Image imageUrl='./profile.jpg' />            
              </div>
              <div className='ml-9'>
                <p className='font-bold'>{name}</p>
                <p className='font-medium'>{email}</p>
              </div>
            </div>
            <div className='mt-5'>
                <p className='text-sm text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi odit laborum consequatur dolorem quae consequatur</p>
            </div>
        </div>
        <div className='border-b border-dashed border-gray-500 mt-96'></div>

    </div>
  )
}

export default account