import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='h-screen w-[25%] rounded-2xl p-2 mx-2 my-0.3  bg-[#020617] border-4 border-[#1E293B]'>
        <div className='border-2 border-b-gray-600 p-2'>
          <h2 className='text-3xl mt-6 font-bold text-white text-center'>Student Management System</h2>
        </div>
        <div className='flex justify-center items-start ml-2 flex-col mt-5'>
          <NavLink to={"/"}>
            <div className='text-[#CBD5E1] bg-black cursor-pointer text-2xl p-2 m-3 w-80 border border-[#334155] rounded-xl  transition'>Home</div>
          </NavLink>
          <NavLink to={"/stdrecords"}>
            <div className='text-[#CBD5E1] bg-black cursor-pointer text-2xl p-2 m-3 w-80 border border-[#334155] rounded-xl  transition'>Students Records</div>
          </NavLink>
          <NavLink to={"/addrecords"}>
            <div className='text-[#CBD5E1] bg-black cursor-pointer text-2xl p-2 m-3 w-80 border border-[#334155] rounded-xl  transition'>Add Records</div>
          </NavLink>
        </div>
    </div>
  )
}

export default Sidebar