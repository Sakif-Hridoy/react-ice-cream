import React from 'react';
import classes from './IceCream.module.css';
import Scoop from '../Scoop/Scoop';

const IceCream = ({items}) => {
  const flavors = Object.keys(items);
  console.log(flavors)
  //Object.Keys are a metthod of make an array from classes
  return (
    <div>
    <div class={classes.icecream}>
      <p class={classes.cone}/>
      {/* <p>Please start adding scoops</p> */}
      {/* scoop component */}
      {flavors.map((flavor)=>(
      <Scoop key={flavor} scoop={flavor}/>
      ))}

      <div class={classes.cherry}/>
    </div>
  </div>
  );
};

export default IceCream;
