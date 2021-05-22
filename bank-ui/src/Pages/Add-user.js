import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import '../resources/font.css';
import validate from 'validate.js';
import {
  Grid,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  contentBody: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  title: {
    marginTop: theme.spacing(3),
    fontFamily: 'KoHo',
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 50,
    flexBasis: 700,
    margin: "auto",
    fontFamily: 'KoHo',
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 200,
  },
  textField: {
    marginTop: theme.spacing(2),
    fontFamily: 'KoHo',
  },
  grid: {
    height: '100%',
    width: '100%',
  },
  root2: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
        color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
    fontFamily: 'KoHo',
  },

}));
const rows = [
  {
  "Name": "Professor Rudolf Eigenmann",
   "id": 1,
  "Description":"Rudolf Eigenmann is a professor at the University of Delaware, Department of Electrical and Computer Engineering. From 1995 to 2017 he was at Purdue University, where he was a professor in the School of Electrical and Computer Engineering. From 2013-2017, he also served as Program Director in the National Science Foundation's Office of Advanced Cyberinfrastructure. ",
  "Page":"https://www.eecis.udel.edu/~eigenman/index.html"
  },
  {
      "Name": "Akshay Bhosale",
      "id": 2,
      "Description": "I am currently working towards my PhD at the University of Delaware in Newark,DE . My major is Computer Engineering.My Undergrad major was Electronics Engineering. I have completed coursework in a variety of areas ranging from web application security, computer architecture, secure software design to parallel programming, compilers , ML and cryptography. This page will give you a comprehensive overview of all my work.",
      "Page":"http://akshayud.me/"
  },
  {
      "Name": "Parinaz Barakhshan",
      "id": 3,
      "Description": "We are creating HPC benchmarks that are representative of real-world applications. This is a collaboration with the Standard Performance Evaluation Corporation, SPEC and Indiana University.",
      "Page":"http://akshayud.me/"
  },
];

const schema = {
  name: {
    presence: { allowEmpty: false, message: "^El nombre es requerido" },
    length: {
      maximum: 64,
    },
  },
  identification: {
    presence: { allowEmpty: false, message: "^La cédula es requerida" },
  },
  username: {
    presence: { allowEmpty: false, message: "^El nombre de usuario es requerido" },
  },
  stateA: {
    presence: { allowEmpty: false, message: "^El estado es requerido" },
  },
};

function Contacts() {

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log("submiiiiiit")
    //password
    console.log(Math.random().toString(36).substring(2))
    console.log(formState.values)
  };

  const [stateA, setStateA] = React.useState('');

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
});

const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;


useEffect(() => {
  const errors = validate(formState.values, schema);

  setFormState((formState) => ({
  ...formState,
  isValid: errors ? false : true,
  errors: errors || {},
  }));
     
}, [formState.values]);

  const handleChange = (event) => {
    event.persist();
  
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
    setStateA(event.target.value);
  };

  const classes = useStyles();
  return (
    <div>
       <Grid
          className={classes.grid}
          container>  
          <Grid
            className={classes.content}
            item
            md={12}
            xs={12}
            container>       
          <div className={classes.content}>  
            <div className={classes.contentBody}> 
              <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Typography
                  className={classes.title}
                  variant="h4"
                  color="primary"
                  align="center"
                >
                  Agrega un nuevo usuario
                </Typography> 
                <br/>   
                <br/>   
                <br/>  
                <br/>             
                <Grid className={classes.grid} container spacing={2}>
               
                  <Grid
                      className={classes.content}
                      item
                      md={6}
                      xs={12}
                      alignItems="center"
                      container
                    >
                     <TextField                       
                      className={classes.textField}
                      error={hasError("name")}
                      helperText={
                        hasError("name")
                          ? formState.errors.name[0]
                          : null
                      }
                      onChange={handleChange}
                      id="standard-basic"
                      name="name"
                      value={formState.values.name || ""}
                      label="Nombre completo" />

                  </Grid>  

                  <Grid
                      className={classes.content}
                      item
                      md={6}
                      xs={12}
                      alignItems="center"
                      container
                    >
                     <TextField                       
                      className={classes.textField}
                      error={hasError("identification")}
                      helperText={
                        hasError("identification")
                          ? formState.errors.identification[0]
                          : null
                      }
                      onChange={handleChange}
                      id="identification" 
                      name="identification"
                      value={formState.values.identification || ""}
                      label="Cédula" />
                  </Grid>  

                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <Grid
                      className={classes.content}
                      item
                      md={6}
                      xs={12}
                      alignItems="center"
                      container
                    >
                      <TextField  
                      className={classes.textField}
                      error={hasError("username")} 
                      helperText={
                        hasError("username")
                          ? formState.errors.username[0]
                          : null
                      }
                      onChange={handleChange}
                      id="username" 
                      name="username"
                      value={formState.values.username || ""}
                      label="Usuario" />
                  </Grid>  

                  <Grid
                      className={classes.content}
                      item
                      md={6}
                      xs={12}
                      alignItems="center"
                      container
                    >
                      <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="stateA"
                            name="stateA"
                            value={formState.values.stateA}
                            onChange={handleChange}
                          >
                            <MenuItem value={true}>Activo</MenuItem>
                            <MenuItem value={false}>No activo</MenuItem>
                          </Select>
                      </FormControl>
                  </Grid>  

                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <Grid
                      className={classes.content}
                      item
                      md={12}
                      xs={12}
                      alignItems="center"
                      container
                    >
                      <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={!formState.isValid}
                      className={classes.button}
                      endIcon={<PersonAddRoundedIcon />}
                      >
                      Agregar usuario    
                      </Button>
                  </Grid>  

                </Grid>  
              </form>   
            </div>     
          </div>
        </Grid>
      </Grid>   
  </div>   
  );
}
export default Contacts;