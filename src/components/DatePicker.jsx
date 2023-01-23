import React, { useState } from 'react'
import Calendar from './Calendar'

const DatePicker = ({ id, name,value, onChange }) => {

  return (
    <div className='font-roboto flex flex-col justify-center items-start relative'>
        <label 
            htmlFor={id}
            className='font-medium text-md'
        >{name}</label>
        <input 
            type="text" 
            id={id}
            name={name}
            className='px-2 py-1 shadow-md outline-none'
            placeholder='mm/dd/yyyy'
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
  )
}

export default DatePicker