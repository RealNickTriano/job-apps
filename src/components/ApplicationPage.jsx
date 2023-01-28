import React, { useState } from 'react'
import ApplicationFormBaseTemplate from './ApplicationFormBaseTemplate'
import DarkModeSwitch from './DarkModeSwitch'
import DatePicker from './DatePicker'
import Input from './Input'
import ThemeSwitcher from './ThemeSwitcher'

const ApplicationPage = ({ color, mode, setColor, setMode, colors, modes }) => {
    const [firstName, setFirstName] = useState('')  
    const [lastName, setLastName] = useState('')
    const [email, setEmailName] = useState('')
    const [cellPhone, setCellPhoneName] = useState('')
    const [dateString, setDateString] = useState('')
  return (
    <>
        {/* <div className='flex flex-col justify-center items-center pb-6'>
            <ThemeSwitcher 
                colors={colors}
                chosenColor={color}
                setColor={setColor}
            />
            <DarkModeSwitch 
                modes={modes}
                chosenMode={mode}
                setMode={setMode}
            />
        </div> */}
        <ApplicationFormBaseTemplate />
    </>
  )
}

export default ApplicationPage