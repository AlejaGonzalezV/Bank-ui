import React from 'react';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';

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