import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UpRow from '../../assets/icons/UpRow.svg?react'
import { setCollapseOpen } from "../../redux/reducers/featureSlice";
import SidebarItem from "./SidebarItem";
const SideBarItemCollapse = ({ item }) => {
    const dispatch = useDispatch();
    const collapseOpen = useSelector((state) => state.feature.collapseOpen);
    const isOpen = collapseOpen === item.path;
    const hasChildren = item && item.children;

    const handleCollapse = () => {
        dispatch(setCollapseOpen(item.path || "")); 
      };
    
      return (
        <>
          <ListItemButton 
          onClick={handleCollapse}
          selected={isOpen}  
          style={{
            backgroundColor:isOpen ? 'rgba(0, 0, 0, 0.19)' : 'transparent',
            padding:'15px 12px',
            borderRadius:12,
            display:'flex',
            alignItems: 'center',
            
          }}
        >
            {item?.prop && (
              <>
                <ListItemIcon>{item.prop.icon || null}</ListItemIcon>
                <ListItemText primary={item.prop.title || "Undefined Title"} />
              </>
            )}
            <UpRow
              style={{
                transform: isOpen ? "rotate(0deg)" : "rotate(180deg)", 
                transition: "transform 0.3s ease", 
              }}
            />
          </ListItemButton>
          {hasChildren && (
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.children.map((child, index) => (
                  <SidebarItem key={index} item={child} />
                ))}
              </List>
            </Collapse>
          )}
        </>
      );
    };

export default SideBarItemCollapse;
