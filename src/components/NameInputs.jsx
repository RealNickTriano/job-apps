import React from 'react'
import FormSectionLabel from './FormSectionLabel'
import Input from './Input'

const NameInputs = ({ firstName, setFirstName, lastName, setLastName, middleName, setMiddleName }) => {
  return (
    <div className='flex flex-col justify-center items-start gap-2 font-semibold'>
        <FormSectionLabel name={'Name'}/>
        <div className='flex flex-col justify-center items-center gap-6'>
            <Input 
                name={'First Name'}
                id={'firstname'}
                value={firstName}
                onChange={setFirstName}
                type={'text'}
                required={true}
            />
            <Input 
                name={'Middle Name'}
                id={'lastname'}
                value={middleName}
                onChange={setMiddleName}
                type={'text'}
            />
            <Input 
                name={'Last Name'}
                id={'lastname'}
                value={lastName}
                onChange={setLastName}
                type={'text'}
                required={true}
            />
        </div>
    </div>
  )
}

export default NameInputs