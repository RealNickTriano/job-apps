import React from 'react'

const ThemeButton = ({ setColor, color }) => {
  return (
    <button onClick={() => setColor(color)}>
      <div className=' w-6 h-6 bg-black rounded-full flex justify-center items-center'>
        <div className='theme-button'>    
        </div>
      </div>
    </button>
  )
}

export default ThemeButton