import React, { useState } from 'react'
import NameInputs from './NameInputs'

const ApplicationFormBaseTemplate = ({ fields }) => {
    const [firstName, setFirstName] = useState('')  
    const [lastName, setLastName] = useState('')
    const [middleName, setMiddleName] = useState('')

  return (
    <div className="px-24">
        <div className='bg-primaryBg p-24 drop-shadow-lg w-full min-h-screen'>
            <form action="" 
                className='flex flex-col justify-center items-center gap-12 text-onPrimaryBg'
            >
                <NameInputs 
                    firstName={firstName}
                    setFirstName={setFirstName}
                    middleName={middleName}
                    setMiddleName={setMiddleName}
                    lastName={lastName}
                    setLastName={setLastName}
                />
            </form>
        </div>
    </div>
  )
}

export default ApplicationFormBaseTemplate