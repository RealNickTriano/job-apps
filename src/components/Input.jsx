import React from 'react'

const Input = ({ id, name, value, onChange, type, required }) => {

  return (
    <div className='flex flex-col justify-center items-start font-roboto'>
      <div className='flex justify-center items-center gap-2'>
        <label 
            htmlFor={id}
            className='font-medium text-md text-onPrimaryBg'
        >
            {name}
        </label>
        {
          required &&
          <span className='text-red-500'>*</span>
        }
      </div>
        <input 
            className='bg-white w-80 h-10 px-2 rounded-sm shadow-md outline-none text-black font-normal'
            type={type} 
            id={id}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
        />
    </div>
  )
}

export default Input