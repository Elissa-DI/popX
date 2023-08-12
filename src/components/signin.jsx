/* eslint-disable no-unused-vars */
import React from 'react'
import Input from './input'
import { Link } from 'react-router-dom';

const signin = () => {
  return (
    <div className='px-5 pt-8'>
    <h2 className='font-bold text-2xl'>Signin to your <br /> PopX account</h2>
        <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.</p>
    <div className='flex flex-col mt-4'>
        <Input type='text' placeholder='Mary Doe' label='Email address'/>
        <Input type='password' placeholder='Mary Doe' label='Password'/>
    </div>
    <Link to='/account'>
      <button className=' bg-red-200 py-2 px-[139px] my-4 rounded-lg text-white'>Login</button>
    </Link>

</div>
  )
}

export default signin