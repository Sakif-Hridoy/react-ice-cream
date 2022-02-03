import React from 'react';
import classes from './Item.module.css';

const Item = ({name}) => {
  return (
    <li class={classes.item}>
    <span>{name}</span>
    <span class={classes.quantity}>2</span>
    <div class="right">
      <button type="button" class={[classes.plus,'rounded'].join(' ')}>+</button>
      <button type="button" class={[classes.minus,'rounded'].join(' ')}>-</button>
    </div>
  </li>
  );
};

export default Item;
