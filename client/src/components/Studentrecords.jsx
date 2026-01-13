import React from 'react'
import Sidebar from '../constant/Sidebar'
import StudentRecordsBar from '../pages/StudentRecordsBar'

const Studentrecords = () => {
  return (
    <div className='flex bg-[#0F172A]'>
        <Sidebar />
        <StudentRecordsBar />
    </div>
  )
}

export default Studentrecords