import React from 'react'
import { Outlet } from 'react-router-dom'

const documents = () => {
  return (
    <div className='pl-[13px]'>
    <Outlet/>
    </div>
  )
}

export default documents