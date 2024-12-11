import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientMainContent from '../layout/ClientMainContent'

const ClientInnerRoute = () => {
  return (
    <ClientMainContent>
        <Outlet/>
    </ClientMainContent>
  )
}

export default ClientInnerRoute