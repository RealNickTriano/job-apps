import React from 'react'
import ThemeButton from './ThemeButton'

const ThemeSwitcher = ({ colors, setColor, chosenColor }) => {
  return (
    <div className='flex justify-center items-center gap-2'>
      {
        colors.map((item, index) => {
          return (
            <ThemeButton 
              key={index}
              setColor={setColor}
              color={item}
              chosenColor={chosenColor}
            />
          )
        })
      }
        
    </div>
  )
}

export default ThemeSwitcher