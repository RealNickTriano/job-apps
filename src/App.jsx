import { useState } from 'react'
import DarkModeSwitch from './components/DarkModeSwitch'
import DatePicker from './components/DatePicker'
import Input from './components/Input'
import Navbar from './components/Navbar'
import ThemeSwitcher from './components/ThemeSwitcher'

const colors = ['stone', 'lime', 'sky', 'amber', 'teal', 'violet', 'rose']
const modes = ['light', 'dark']

function App() {
  const [color, setColor] = useState(colors[0])
  const [mode, setMode] = useState(modes[0])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmailName] = useState('')
  const [cellPhone, setCellPhoneName] = useState('')
  const [dateString, setDateString] = useState('')

  return (
    <>
      <div className={`min-h-screen bg-primaryBg theme-${color} theme-${mode}`}>
        <Navbar />
        <div className='flex flex-col justify-center items-center pb-6'>
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
        </div>
        <div className="px-24">
          <div className='bg-primary p-24 rounded-md shadow-md w-full h-full'>
            <form action="" 
              className='flex flex-col justify-center items-center gap-12 text-onPrimaryBg'
            >
              <Input 
                name={'First Name'}
                id={'firstname'}
                value={firstName}
                onChange={setFirstName}
                type={'text'}
              />
              <Input 
                name={'Last Name'}
                id={'lastname'}
                value={lastName}
                onChange={setLastName}
                type={'text'}
              />
              <Input 
                name={'Email'}
                id={'email'}
                value={email}
                onChange={setEmailName}
                type={'email'}
              />
              <Input 
                name={'Phone Number'}
                id={'tel'}
                value={cellPhone}
                onChange={setCellPhoneName}
                type={'tel'}
              />
              <DatePicker 
                name={'Start Date'}
                id={'start'}
                value={dateString}
                onChange={setDateString}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
