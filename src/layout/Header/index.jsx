import React from 'react'
import Hamburger from '../../assets/icons/Hamburger.svg?react'
import UserIcon from '../../assets/icons/UserIcon.svg?react'
const index = () => {
  return (
    <div className=' flex items-center justify-between h-[67px] pl-[27px] pr-[44px] border bottom-[0.6px]  m-0'>
        <Hamburger/>
        <div className='flex items-center gap-[10px]'>
            <span>
            <UserIcon/>
            </span>
            <p>
                Kanan Akbarli
            </p>
        </div>
    </div>
  )
}

export default index