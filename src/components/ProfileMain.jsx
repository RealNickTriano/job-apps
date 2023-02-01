import React from 'react'
import ResumeSection from './ResumeSection'
import SkillsSection from './SkillsSection'

const ProfileMain = () => {
  return (
    <div className='grid grid-cols-2 grid-rows-6'>
        <ResumeSection />
        <div className='col-start-2 col-end-2 row-start-1 row-end-1 flex justify-start items-start w-full'>
            <SkillsSection />
        </div>

        <div>
            <h1>About You</h1>
            <h1 className='text-sm'>Experience</h1>
            <h1 className='text-sm'>Email</h1>
            <h1 className='text-sm'>Phone Number</h1>
            <h1 className='text-sm'>Location</h1>
            <h1 className='text-sm'>Work Authorization</h1>
        </div>
    </div>
  )
}

export default ProfileMain