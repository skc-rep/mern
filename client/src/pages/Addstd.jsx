import React from 'react'

const Addstd = () => {
  return (
    <div className="h-screen rounded-2xl bg-[rgb(2,6,23)] w-[75%] p-2 mx-2 my-0.3 border-4 border-[#1E293B]">
        <h2 className='text-5xl text-white text-center'>Add Records</h2>
        <div className='h-[85vh] w-full border-2 border-gray-700 mt-5 rounded-2xl p-9'>
            <form autoComplete='off'>
                <label className='text-white text-3xl' htmlFor="">Student's Name</label>
                <input className='border-2 border-white rounded text-white p-3' type="text" placeholder='Enter Students Name' name='name' id='name'/>
            </form>
        </div>
    </div>
  )
}

export default Addstd