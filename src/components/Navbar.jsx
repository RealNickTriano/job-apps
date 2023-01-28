import React from 'react'
import NavItem from './NavItem'
import UserEmailWithIcon from './UserEmailWithIcon'

const Navbar = ({ color }) => {
  return (
    <div className='bg-secondaryBg font-roboto font-medium flex justify-end items-center py-3 px-6 shadow-md w-full'>
        <div className='flex flex-col justify-center items-end gap-2'>
          <UserEmailWithIcon 
            color={color}
          />
          <ul className='flex justify-center items-center gap-12 text-primary'>
            <NavItem 
              content={'Search for Jobs'}
            />
            <NavItem 
              content={'Dashboard'}
            />
          </ul>
        </div>
    </div>
  )
}

export default Navbar