import React from 'react'
import { FaCameraRetro } from "react-icons/fa";

const Avatar = () => {
  return (
    // TODO: User submits image or default to initials
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <h1 className='text-4xl font-roboto font-normal'>NT</h1>
        <button><FaCameraRetro /></button>
    </div>
  )
}

export default Avatar