import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { makeStyles } from '@material-ui/core/styles';
import AddUser from './Pages/Add-user';
import EditUser from './Pages/Edit-user';

const useStyles = makeStyles((theme) => ({
  Centerbar: {
    paddingLeft:'500'
  },
 
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Router>
        <Navbar className={classes.Centerbar} />
        <Switch>
          <Route  path='/' exact component={Home} />
          <Route path='/register'  component={AddUser}/>
          <Route path='/edit'  component={EditUser}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
