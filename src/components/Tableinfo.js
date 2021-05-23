import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import IconButton from '@material-ui/core/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import useSWR from 'swr';
import { useHistory } from "react-router-dom";
import { UserController } from '../controllers';
import '../resources/KoHo.css';
import {
    Grid,
    Typography,
  } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({
 
    button:{
      position: 'relative',
      alignItems: 'center',
      alignText: 'center',
      justifyContent: 'center',
    },
    title:{
      fontFamily: 'KoHo'
    }
  
  }));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:  "#060b26" ,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  button:{
    justifyContent: 'center',
      alignItems: 'center'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


export default function Tableinfo({ users }) {
 
  let history = useHistory();
  const classes = useStyles();
  const { data, error } = useSWR('/users', UserController.list)
  users = data?.data;

  const handleDelete = (property) => async (event) =>{
    event.preventDefault();

    await UserController.delete(property)
    history.go(0)
  }

  const handleEdit = (property) => async (event) =>{
    event.preventDefault();

    history.push("/edit", {name: property.name, document: property.document, username: property.username, active: property.active})  
  }

  return (
    <TableContainer  component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.title}>Nombre Completo</StyledTableCell>
            <StyledTableCell className={classes.title} align="left">Cédula</StyledTableCell>
            <StyledTableCell className={classes.title} align="left">Usuario</StyledTableCell>
            <StyledTableCell className={classes.title} align="left">Estado</StyledTableCell>
            <StyledTableCell className={classes.title} align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {users===undefined ? (
          ""
        ):(
          users.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <Typography
                  className={classes.title}
                  color="primary"
                >
                  {row.name}  
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">
                <Typography
                    className={classes.title}
                    color="primary"
                  >
                    {row.document} 
                  </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">             
                <Typography
                  className={classes.title}
                  color="primary"
                >
                  {row.username} 
                </Typography>
              </StyledTableCell>
              <StyledTableCell align="left">

              {row.active===true? (
                <Typography
                  className={classes.title}
                  color="primary"
                >
                  Activo
                </Typography>
              ):(
                <Typography
                  className={classes.title}
                  color="primary"
                >
                  No activo
                </Typography>
              )}

              </StyledTableCell>
              <StyledTableCell align="left">
          
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleEdit(row)}>
                    <EditRoundedIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={6}>
                  <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleDelete(row.document)}>
                    <DeleteRoundedIcon />
                  </IconButton>
                </Grid>
              </Grid>

              </StyledTableCell>
            </StyledTableRow>
          ))
        )}

        </TableBody>
      </Table>
    </TableContainer>
  );
}
