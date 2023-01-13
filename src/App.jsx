import { useState } from 'react'
import Input from './components/Input'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmailName] = useState('')
  const [cellPhone, setCellPhoneName] = useState('')

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-100">
      <div className='flex flex-col justify-center items-center gap-12'>
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
      </div>
    </div>
  )
}

export default App
