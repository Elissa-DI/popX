/* eslint-disable no-unused-vars */
import React from 'react'
import Input from './input'
import { Link } from 'react-router-dom';

const create = () => {
  return (
    <div className='px-5 pt-8'>
        <h2 className='font-bold text-2xl'>Create your <br /> PopX account</h2>
        <div className='flex flex-col justify-between mt-4'>
            <Input type='text' placeholder='Mary Doe' label='Full Name*'/>
            <Input type='text' placeholder='Mary Doe' label='Phone number*'/> 
            <Input type='text' placeholder='Mary Doe' label='Email address*'/>
            <Input type='text' placeholder='Mary Doe' label='Password*'/>
            <Input type='text' placeholder='Mary Doe' label='Company name'/>
            <p className='font-medium text-sm'>Are you an Agency?*</p>
            <div className='flex gap-x-3'>
              <input type="radio" name='gender' value="Female" id="female"/>Yes
              <input type="radio" name='gender' value="Female" id="female"/>No
            </div>
            <Link to='/account'>
              <button className=' bg-purple-900 py-2 px-24 my-4 rounded-lg text-white mt-40'>Create Account</button>
            </Link>
        </div>

    </div>
  )
}

export default create