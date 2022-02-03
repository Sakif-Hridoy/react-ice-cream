import React from 'react';
import classes from './Scoop.module.css';

const Scoop = ({scoop}) => {
  return (
    //   classes.orange are dynamic
      <div class={[classes.scoop,classes[scoop]].join(' ')} />
  )
};

export default Scoop;
