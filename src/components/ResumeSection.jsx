import React from 'react'

const ResumeSection = () => {
  return (
    <div className='col-start-1 col-end-1 row-start-1 row-end-1 flex-col justify-center items-center w-full gap-'> 
        <h1 className='font-robot font-semibold text-2xl'>Resume</h1>
        <div className='flex justify-start items-center gap-4'>
            <button className='text-sm font-roboto font-normal'>File_Name.pdf</button>
            <label for="file-upload"
                className=' font-normal text-sm font-roboto cursor-pointer'
            >
                Upload New
            </label>
            <input id="file-upload" type="file"
                className='hidden'
            />
        </div>
    </div>
  )
}

export default ResumeSection