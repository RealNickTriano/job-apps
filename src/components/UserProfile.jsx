import React, { useState } from 'react'
import Avatar from './Avatar'
import Banner from './Banner'
import ProfileMain from './ProfileMain'
import UserFullName from './UserFullName'

// TODO
const UserProfile = () => {
  const [showProfile, setShowProfile] = useState(true)
  const [showMessages, setShowMessages] = useState(false)
  const [showAlerts, setShowAlerts] = useState(false)
  const [showJobs, setShowJobs] = useState(false)

  return (
    <div className='text-xl font-bold font-roboto bg-primary w-2/3 min-h-screen shadow-lg flex flex-col justify-start items-center relative'>
      <Banner />
      <div className='absolute top-20 left-12 shadow-[inset_0_-1px_4px_rgba(0,0,0,0.6)] rounded-full bg-white w-24 h-24 flex justify-center items-center'>
        <Avatar />   
      </div> 
      <div className='flex flex-col justify-center items-start al pt-4 self-start pl-40'>
          <UserFullName />
          <h1 className='text-xl font-roboto text-primaryBg font-normal'>Software Engineer</h1>
          <h1 className='text-lg font-roboto text-primaryBg font-normal'>Tagline</h1>
      </div>
      <div className='w-full bg-secondaryBg shadow-md mt-6'>
        <ul className='flex justify-around items-center text-primary font-roboto font-medium py-2'>
          <li>
          <button onClick={() => {
              setShowJobs(false)
              setShowProfile(true)
              setShowMessages(false)
              setShowAlerts(false)
            }}>Profile</button>
            <div 
              className='bg-primary w-full h-[0.125rem]'
              style={{width : showProfile ? '100%' : '0%'}}
            ></div>
          </li>

          <li>
            <button onClick={() => {
              setShowJobs(true)
              setShowProfile(false)
              setShowMessages(false)
              setShowAlerts(false)
            }}>Jobs</button>
              <div 
                className='bg-primary h-[0.125rem]'
                style={{width : showJobs ? '100%' : '0%'}}
              ></div>
          </li>

          <li>
          <button onClick={() => {
              setShowJobs(false)
              setShowProfile(false)
              setShowMessages(false)
              setShowAlerts(true)
            }}>Alerts</button>
            <div 
              className='bg-primary w-full h-[0.125rem]'
              style={{width : showAlerts ? '100%' : '0%'}}
            ></div>
          </li>

          <li>
          <button onClick={() => {
              setShowJobs(false)
              setShowProfile(false)
              setShowMessages(true)
              setShowAlerts(false)
            }}>Messages</button>
            <div 
              className='bg-primary w-full h-[0.125rem]'
              style={{width : showMessages ? '100%' : '0%'}}
            ></div>
          </li>

        </ul>
      </div>

      <main className='mt-4 px-12 w-full'>
        {
          showProfile &&
          <ProfileMain />
        }
      </main>
    </div>
  )
}

export default UserProfile