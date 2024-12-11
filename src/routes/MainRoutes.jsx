import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './client/generateRoute'
import ClientInnerRoute from './ClientInnerRoute'
import InnerRoute from './client/InnerRoute'
const MainRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<InnerRoute/>}>
        <Route path=''  element={<ClientInnerRoute/>}>
            {routes}
        </Route>
        </Route>
    </Routes>
    </>
  )
}

export default MainRoutes