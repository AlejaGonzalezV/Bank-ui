import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { makeStyles } from '@material-ui/core/styles';
import Contacts from './Pages/Contacts';

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
          <Route path='/agregar'  component={Contacts}/>

        </Switch>
      </Router>
    </>
  );
}

export default App;
