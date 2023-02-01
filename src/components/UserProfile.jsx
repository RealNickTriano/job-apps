import React from 'react'
import Avatar from './Avatar'
import Banner from './Banner'
import UserFullName from './UserFullName'

// TODO
const UserProfile = () => {
  return (
    <div className='text-xl font-bold font-roboto bg-primary w-2/3 h-screen shadow-lg flex flex-col justify-start items-center relative'>
      <Banner />
      <div className='absolute top-20 left-12 shadow-[inset_0_-1px_4px_rgba(0,0,0,0.6)] rounded-full bg-white w-24 h-24 flex justify-center items-center'>
        <Avatar />   
      </div> 
      <div className='flex flex-col justify-center items-start al pt-4 self-start pl-40'>
          <UserFullName />
          <h1 className='text-xl font-roboto text-primaryBg font-normal'>Software Engineer</h1>
          <h1 className='text-lg font-roboto text-primaryBg font-normal'>Tagline</h1>
      </div>
      <div className='w-[110%] bg-secondaryBg shadow-md mt-6'>
        <ul className='flex justify-around items-center text-primary font-roboto font-medium py-2'>
          <li>
            Profile
            <div className='bg-primary w-full h-[0.125rem]'></div>
          </li>
          <li>Jobs</li>
          <li>Alerts</li>
          <li>Messages</li>
        </ul>
      </div>
    </div>
  )
}

export default UserProfile