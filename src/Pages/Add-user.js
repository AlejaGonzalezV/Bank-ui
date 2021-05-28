import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import '../resources/KoHo-bold.css';
import validate from 'validate.js';
import { useHistory } from "react-router-dom";
import { UserController } from '../controllers';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Add() {

  let history = useHistory();
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = {
      name: formState.values.name,
      document: formState.values.identification,
      username: formState.values.username,
      active: formState.values.stateA,
    }
   
    await UserController.register(data).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        setOpen2(true);
        history.push("/")
      }
    })
    .catch((error) => {
      setOpen(true);
    });
    
    
  };

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

  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Ocurrió un error creando el usuario. Revisa los datos
        </Alert>
      </Snackbar> 
      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
        <Alert onClose={handleClose2} severity="success">
          Usuario registrado con éxito
        </Alert>
      </Snackbar> 
  </div>   
  );
}
export default Add;