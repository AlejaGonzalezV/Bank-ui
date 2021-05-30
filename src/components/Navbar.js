import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Avatar from '@material-ui/core/Avatar';
import ImgOne from '../static/images/banklogo.png';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
 
  title: {
    color: theme.palette.common.white,
    marginTop: theme.spacing(2),
   
      fontSize: 19,
    
  },
  

}));

function Navbar() {
  const [sidebar] = useState(true);
  const classes = useStyles();
  /* const showSidebar = () => setSidebar(!sidebar); */
  

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        <div className={classes.root}>
     
     
      
    </div>
               </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' /* onClick={showSidebar} */>
            <li className='navbar-toggle'>
            
              <Grid container spacing={3}>
                  <Grid item xs={12}>
                  </Grid>
                  <Grid item >
                  <Avatar alt="Remy Sharp" src={ImgOne}/>
                  </Grid>
                  <Grid item xs={6} >
                      <Typography
                        className={classes.title}
                        variant="h10"
                       
                      >
                      Vaqueros Bank
                      </Typography> 
                   
                  </Grid>
        
              </Grid>
               
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;