import React from 'react'
import SkillListItem from './SkillListItem'

const SkillsSection = () => {
  return (
    <div className='w-full'>
        <h1 className='font-robot font-semibold text-2xl'>Skills</h1>
        <ul  className='flex flex-col justify-center items-between gap-2 w-full'>
            <SkillListItem 
                name={'Git'}
                yearsOfExperience={2}
                lastUsed={'Current'}
            />
            <SkillListItem 
                name={'Python'}
                yearsOfExperience={2}
                lastUsed={'Current'}
            />
            <SkillListItem 
                name={'Java'}
                yearsOfExperience={3}
                lastUsed={'2022'}
            />
            <SkillListItem 
                name={'Java'}
                yearsOfExperience={3}
                lastUsed={'2022'}
            />
            <SkillListItem 
                name={'Java'}
                yearsOfExperience={3}
                lastUsed={'2022'}
            />
        </ul>

        <button className='text-sm mt-6 font-roboto font-normal'>See all skills</button>
    </div>
  )
}

export default SkillsSection