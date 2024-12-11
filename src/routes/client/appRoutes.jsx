import React from 'react';
import DocIcon from '../../assets/icons/Document.svg?react';
import SettingsIcon from '../../assets/icons/SettingsIcon.svg?react';
import Documents from '../../pages/Documents/documents';
import ActionCmd from '../../pages/Documents/ActionCmd/index';
import Decision from '../../pages/Documents/Decision/index';
import Tasks from '../../pages/Documents/Tasks/index'
import Parametrs from '../../pages/Parameters/parametrs'
import Institution from '../../pages/Parameters/İnstitution/index'
import Type from '../../pages/Parameters/Type/index'
import { Navigate } from 'react-router-dom';
const appRoutes = [
{
    index:true,
    element:<Navigate to='/documents/action'/>
},
{
    element:<Documents />,
    path:'/documents',
    prop:{
        title:'Sənədlər',
        icon:<DocIcon />
    },
    children:[
        {
            element:<ActionCmd/>,
            path:'/documents/action',
            prop:{
                title:'Fəaliyyət əmrləri',
            }
        },
        {
            element:<Decision/>,
            path:'/documents/decision',
            prop:{
                title:'Qərarlar',
            }
        },
        {
            element:<Tasks/>,
            path:'/documents/tasks',
            prop:{
                title:'Tapşırıqlar',
            }
        }
    ]
},
{
    element:<Parametrs />,
    path:'/parameters',
    prop:{
        title:'Parametrlər',
        icon:<SettingsIcon />
    },
    children:[
        {
            element:<Institution/>,
            path:'/parameters/institution',
            prop:{
                title:'Qurum',
            }
        },
        {
            element:<Type/>,
            path:'/parameters/type',
            prop:{
                title:'Növ',
            }
        }
    ]
 
}
]

export default appRoutes;