import React from 'react'

const FormSectionLabel = ({ name }) => {
  return (
    <label 
        htmlFor=""
        className='text-2xl font-roboto text-left'
    >{name}</label>
  )
}

export default FormSectionLabel