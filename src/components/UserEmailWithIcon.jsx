import React from 'react'
import { FaUserAlt } from "react-icons/fa";

const UserEmailWithIcon = () => {
  return (
    <div className='flex justify-center items-center gap-2'>
        <FaUserAlt 
            className='text-primary'
        />
        <div 
            className='text-sm text-primary'
        >nicholastriano1999@gmail.com</div>
    </div>
    
  )
}

export default UserEmailWithIcon