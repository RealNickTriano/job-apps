import React from 'react'

const SkillListItem = ({ name, yearsOfExperience, lastUsed }) => {
  return (
    <li>
        <div className='flex justify-between items-center'>
            <h1 className='font-roboto text-lg font-normal'>{name}</h1>
            <div className='flex justify-center items-center gap-2'>
                <h1 className='font-roboto text-lg font-normal'>{yearsOfExperience} years</h1>
                <h1>|</h1>
                <h1 className='font-roboto text-lg font-normal'>{lastUsed}</h1>
            </div>
        </div>
        <div className='w-full rounded-full h-1 bg-onNeutralBg'>
            {// TODO: change input percentage based on other skills
            }
            <div className='w-[50%] rounded-full h-1 bg-neutralBg'></div>
        </div>
    </li>
  )
}

export default SkillListItem