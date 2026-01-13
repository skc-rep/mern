import React from 'react'
import {NotebookPen, Trash} from "lucide-react"

const StudentRecordsBar = () => {
  return (
    <div className="h-screen rounded-2xl bg-[rgb(2,6,23)] w-[75%] p-2 mx-2 my-0.3 border-4 border-[#1E293B]">
        <h2 className='text-5xl text-white text-center'>Records</h2>
        <div className='h-[85vh] w-full border-2 border-gray-700 mt-5 rounded-2xl overflow-scroll no-scrollbar overflow-x-hidden '>
            <div className='h-15 w-[98%] rounded-2xl  p-2 m-3  border-2 border-gray-800 grid  grid-cols-5 place-items-center '>
                <h3 className='text-xl text-white'>S.No</h3>
                <h3 className='text-xl text-white'>Name</h3>
                <h3 className='text-xl text-white'>Address</h3>
                <h3 className='text-xl text-white'>PhNumber</h3>
                <h3 className='text-xl text-white'>Actions</h3>
            </div>
            <div className='h-15 w-[98%] rounded-2xl  p-2 m-3  bg-gray-900 grid  grid-cols-5 place-items-center '>
                <h3 className='text-xl text-white'>1</h3>
                <h3 className='text-xl text-white'>Sabin</h3>
                <h3 className='text-xl text-white'>Pokhara-Birauta</h3>
                <h3 className='text-xl text-white'>987654897</h3>
                <div className='text-xl text-white flex gap-3 cursor-pointer'><NotebookPen color='yellow' /> <Trash color='red' /></div>
            </div>
        </div>
    </div>
  )
}

export default StudentRecordsBar