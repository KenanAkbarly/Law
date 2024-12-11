import React from 'react'
import Header from '../layout/Header/index'
import Side from './SideBar/index'
import appRoutes from '../routes/client/appRoutes'

const ClientMainContent = ({children}) => {
  return (
    <div className="grid grid-cols-5 min-h-screen">
    <div className="col-span-1 bg-custom-gradient">
      <Side routes={appRoutes} />
    </div>
    <div className="col-span-4 bg-white">
      <Header />
      <div className="p-4">{children}</div>
    </div>
  </div>
);
};


export default ClientMainContent