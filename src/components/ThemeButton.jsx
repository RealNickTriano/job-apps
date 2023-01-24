import React from 'react'

const ThemeButton = ({ setColor, color, chosenColor }) => {
  const cn = `w-[80%] h-[80%] rounded-full`
     
  return (
    <button onClick={() => setColor(color)}>
      <div 
        className={`w-6 h-6 rounded-full flex justify-center items-center shadow-md theme-${color}`}
        style={{background: color == chosenColor ? 'black': ''}}
      >
        <div 
          className={cn} 
          style={{background: 'linear-gradient( -45deg, var(--color-primary-100), var(--color-primary-100) 49%, white 49%, white 51%, var(--color-primary-500) 51% )'}}
        >    
        </div>
      </div>
    </button>
  )
}

export default ThemeButton