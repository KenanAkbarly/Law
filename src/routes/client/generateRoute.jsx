import React from 'react'
import appRoutes from './appRoutes'
import { Route } from 'react-router-dom'

const generateRoute = (routes) => {
  return routes.map((route, index)=>(
    route.index ? (
        <Route
        index={route.index}
        element={route.element}
        key={index}
        />
    ) : (
        <Route
        path={route.path}
        element={route.element}
        key={index}
        >
            {
            route.children && (
                generateRoute(route.children)
                )
            }
        </Route>
    )
  ))
}

export const routes = generateRoute(appRoutes)