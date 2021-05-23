import React from 'react'
import PropTypes from 'prop-types';
import {
    Button,
    Link,
  } from "@material-ui/core";

const Collaborators = props =>{

    const onclick = () => {
        if(props.page!==""){
        window.location.replace(`${props.page}`);
        }
      };


    return (
        <Link variant="contained"  color="primary"
        onClick={onclick}
        name='Page'>{props.name}</Link>
    )
}
Collaborators.propTypes = {
  page: PropTypes.string,
  name: PropTypes.string,
};

export default Collaborators;