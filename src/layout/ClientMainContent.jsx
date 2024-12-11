import React from 'react'
import Header from '../layout/Header/index'
import Side from './SideBar/index'
import appRoutes from '../routes/client/appRoutes'
import { useSelector } from 'react-redux';

const ClientMainContent = ({children}) => {
    const openSidebar = useSelector((state) => state.feature.openSidebar) 
    console.log(openSidebar)
  return (
    <div className={`grid ${openSidebar?'grid-cols-5':'grid-cols-12'} min-h-screen`}>
    <div className={`col-span-1 bg-custom-gradient`}>
      <Side routes={appRoutes} />
    </div>
    <div className={`${openSidebar? 'col-span-4':'col-span-11'} bg-white`}>
      <Header />
      <div className="p-4">{children}</div>
    </div>
  </div>
);
};


export default ClientMainContent