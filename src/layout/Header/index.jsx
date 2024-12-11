import React from 'react'
import Hamburger from '../../assets/icons/Hamburger.svg?react'
import UserIcon from '../../assets/icons/UserIcon.svg?react'
import { useDispatch } from 'react-redux'
import { setOpenSidebar } from '../../redux/reducers/featureSlice'
const index = () => {
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(setOpenSidebar())
    }
  return (
    <div className=' flex items-center justify-between h-[67px] pl-[27px] pr-[44px] border bottom-[0.6px]  m-0'>
        <span className='hover:cursor-pointer' onClick={()=> dispatch(setOpenSidebar())}>
        <Hamburger/>
        </span>
        <div className='flex items-center gap-[10px]'>
            <span >
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