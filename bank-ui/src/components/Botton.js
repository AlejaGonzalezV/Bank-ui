import React from 'react'
import PropTypes from 'prop-types';
import {
    Button,
  } from "@material-ui/core";

const Botton = props =>{

    const onclick = () => {
        window.location.replace(`${props.page}`);
      };


    return (
        <Button variant="contained"  color="primary"
        onClick={onclick}
        name='Page'>Page</Button>
    )
}
Botton.propTypes = {
  page: PropTypes.string,
};

export default Botton;