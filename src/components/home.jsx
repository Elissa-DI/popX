/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='pt-[125%] px-5 overflow-y-hidden'>
      <h2 className='font-extrabold text-2xl'>Welcome to PopX</h2>
      <p className=' pr-10 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <Link to="/signup">
        <button className=' bg-purple-700 py-3 px-24 my-4 rounded-lg text-white'>
          Create Account
        </button>
      </Link>
      <Link to="/signin">
        <button className=' bg-purple-400 py-3 px-14 rounded-lg font-medium'>Already Registered? Login</button>
      </Link>
    </div>
  );
}

export default Home;
