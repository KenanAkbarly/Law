import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SidebarItem = ({item}) => {
    const location = useLocation()
    const hasProp = item && item.prop;

    return (
      <ListItemButton
        component={Link}
        to={item?.path || "/"} 
        selected={location.pathname === item?.path}
      >
        {hasProp && (
          <>
            <ListItemIcon>{item.prop.icon || null}</ListItemIcon>
            <ListItemText primary={item.prop.title || "Undefined Title"} />
          </>
        )}
      </ListItemButton>
    );
  };

export default SidebarItem