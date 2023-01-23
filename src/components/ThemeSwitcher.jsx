import React from 'react'
import ThemeButton from './ThemeButton'

const ThemeSwitcher = ({ colors, modes, setColor, setMode }) => {
  return (
    <div className='flex justify-center items-center'>
        <ThemeButton 
          setColor={setColor}
          color={colors[1]}
        />
    </div>
  )
}

export default ThemeSwitcher