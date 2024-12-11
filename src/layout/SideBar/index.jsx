import React, { useEffect } from 'react'
import Logo from '../../assets/LogoLess.svg?react'
import RowArrow from '../../assets/icons/RowArrow.svg?react'
import { List } from '@mui/material'
import SideBarItemCollapse from './SideBarItemCollapse'
import SidebarItem from './SidebarItem'
const index = ({routes}) => {

  return (
    <div className='pl-[13px] pr-[13px] pb-[18px] pt-[18px]'>
        <div>
          <Logo/>
          <h1>
          FHN-İN FƏalİyyətİ İlə bağlı əmr və qərarların elektron Bazası
          </h1>
          <RowArrow/>
        </div>
        <div>
        <List component="nav">
      {routes.map((item, index) => (
        <div key={index}>
          {item.children ? <SideBarItemCollapse item={item} /> : <SidebarItem item={item} />}
        </div>
      ))}
    </List>
         
        </div>
    </div>
  )
}

export default index