import React from 'react'

const DarkModeSwitch = ({ modes, chosenMode, setMode }) => {
  return (
    <button 
        className='font-robot font-bold capitalize'
        onClick={() => chosenMode == 'light' ? setMode(modes[1]) : setMode(modes[0])}    
    >{chosenMode}</button>
  )
}

export default DarkModeSwitch