import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='h-screen w-[25%] rounded-2xl p-2 mx-2 my-0.3  bg-[#020617] border-4 border-[#1E293B]'>
        <div className='border-2 border-b-gray-200 p-2'>
          <h2 className='text-3xl mt-6 font-bold text-[#22D3EE] text-center'>Student Management System</h2>
        </div>
        <div className='flex justify-center items-start ml-2 flex-col mt-5'>
          <NavLink to={"/"}>
            <div className='text-[#CBD5E1] bg-black cursor-pointer text-2xl p-2 m-3 w-80 border border-[#334155] rounded-xl hover:border-[#22D3EE] transition'>Home</div>
          </NavLink>
          <NavLink to={"/stdrecords"}>
            <div className='text-[#CBD5E1] bg-black cursor-pointer text-2xl p-2 m-3 w-80 border border-[#334155] rounded-xl hover:border-[#22D3EE] transition'>Students Records</div>
          </NavLink>
          <NavLink to={"/addrecords"}>
            <div className='text-[#CBD5E1] bg-black cursor-pointer text-2xl p-2 m-3 w-80 border border-[#334155] rounded-xl hover:border-[#22D3EE] transition'>Add Records</div>
          </NavLink>
        </div>
    </div>
  )
}

export default Sidebar