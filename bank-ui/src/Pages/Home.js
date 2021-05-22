import React from 'react';
import Tableinfo from '../components/Tableinfo'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../resources/font.css';
import {
  Grid,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 
  content: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "auto",
    flexDirection: "column",
 
    [theme.breakpoints.down('xl')]: {
      paddingLeft: theme.spacing(15),     
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(20),     
    },
    
  },
  contentBody: {
    /* flexGrow: 2, */
    /* display: "flex", */

    width:"80%",
    flexDirection: "column",
   /*  alignItems: "flex-start", */
   
  },
  title: {
    marginTop: theme.spacing(2),
    fontFamily: 'KoHo',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      fontSize: 15,
     },
     [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(2),
      fontSize: 15,
     },
     [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing(2),
      fontSize: 20,
     }
  },
  grid: {
    height: '100%',
    width: '100%'
  },
  root2: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
        color: theme.palette.text.secondary,
  },

}));

function Home() {

  const classes = useStyles();

  return (

    
    <div >
      
       <Grid
          className={classes.content}
          alignItems="center"

        >          
        <br/>
            <div className={classes.contentBody}>        
                  <Typography
                    className={classes.title}
                    variant="h4"
                    color="primary"
                  >
                    LISTA DE USUARIOS DEL BANCO
                  </Typography> 
               
               <br/>
               <div className={classes.root2}>       

                    <br/>
                    <Tableinfo />
                    {/* <Grid 
                    className={classes.grid}
                    container
                    spacing={1}

                    >
                    <Grid
                      
                        item
                        xs
                        alignItems="center"    
                       
                    >  

                        
                     

                    </Grid>
              
                    </Grid> */}
                    </div>           
            </div>
      </Grid>   
  </div>
   
  );
}
export default Home;