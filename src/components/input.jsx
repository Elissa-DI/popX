/* eslint-disable no-unused-vars */
import React from 'react'

const input = ({ label, placeholder, type }) => {
  return (
    <fieldset className="border-2 border-gray-400 px-3 pb-1 rounded focus-within:border-blue-500 my-1.5">
      <legend className="text-purple-700 text-xs px-1 pr-3 font-bold">
        {label}
      </legend>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full focus:outline-none"
      />
    </fieldset>
  )
}

export default input