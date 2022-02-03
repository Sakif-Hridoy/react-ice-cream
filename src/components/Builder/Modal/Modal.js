import React from 'react';
import classes from './Modal.module.css';

const Modal = ({children}) => {
  return (
    <div>
    <div class={classes.backdrop} />
    <div class={classes.modalBody}>{children}</div>
  </div>
  )
};

export default Modal;
