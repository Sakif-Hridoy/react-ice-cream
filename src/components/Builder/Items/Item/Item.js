import React from 'react';
import classes from './Item.module.css';
import {countBy} from 'lodash';

const Item = ({name,add,remove,scoops={}}) => {
  const scoopsByCount = countBy(scoops);
  console.log(scoopsByCount);
  return (
    <li class={classes.item}>
    <span>{name}</span>
    {scoopsByCount[name]>= 0 ? (<span class={classes.quantity}>{scoopsByCount[name]}</span>):null}
    <div class="right">
      <button onClick={add.bind(this, name)} type="button" class={[classes.plus,'rounded'].join(' ')}>+</button>
      <button onClick={remove.bind(this, name)} type="button" class={[classes.minus,'rounded'].join(' ')}>-</button>
    </div>
  </li>
  );
};

export default Item;
