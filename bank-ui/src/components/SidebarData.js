import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';



export const SidebarData = [
  {
    title: 'Usuarios',
    path: '/',
    icon: <PeopleAltRoundedIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Agregar',
    path: '/register',
    icon: <GroupAddRoundedIcon/>,
    cName: 'nav-text'
  },
  
];