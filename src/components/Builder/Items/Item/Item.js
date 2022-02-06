import React from 'react';
import classes from './Item.module.css';

const Item = ({name,add,remove}) => {
  return (
    <li class={classes.item}>
    <span>{name}</span>
    <span class={classes.quantity}>2</span>
    <div class="right">
      <button onClick={add.bind(this, name)} type="button" class={[classes.plus,'rounded'].join(' ')}>+</button>
      <button onClick={remove.bind(this, name)} type="button" class={[classes.minus,'rounded'].join(' ')}>-</button>
    </div>
  </li>
  );
};

export default Item;
