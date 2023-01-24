import React from 'react'

const Input = ({ id, name, value, onChange, type }) => {

  return (
    <div className='flex flex-col justify-center items-start font-roboto'>
        <label 
            htmlFor={id}
            className='font-medium text-md text-onPrimaryBg'
        >
            {name}
        </label>
        <input 
            className='bg-white w-64 h-10 px-2 shadow-md outline-none'
            type={type} 
            id={id}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
  )
}

export default Input