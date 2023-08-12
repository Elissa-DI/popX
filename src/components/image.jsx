/* eslint-disable no-unused-vars */
import React from 'react'
import { FaCamera } from 'react-icons/fa';

const image = ({ imageUrl }) => {
  return (  
    <div className="relative">
      <img src={imageUrl} alt="Image" className=" w-16 h-16 rounded-full" />    
        <div className="absolute bottom-0 left-12 p-1 bg-purple-950 rounded-full">
          <FaCamera className="text-gray-100 text-sm"/>
        </div>
    </div>
  )
}

export default image