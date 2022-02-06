import React from 'react';
import classes from './IceCream.module.css';
import Scoop from '../Scoop/Scoop';

const IceCream = ({scoops}) => {
  console.log(scoops);
  // const flavors = Object.keys();
  // console.log(flavors)
  //Object.Keys are a metthod of make an array from classes
  return (
    <div>
      <div class={classes.icecream}>
        <p class={classes.cone}/>
        {/* <p>Please start adding scoops</p> */}
        {scoops.map(scoop=> <Scoop key={`${scoop} ${Math.random()}`} scoop={scoop}/>)}
        <div class={classes.cherry}/>
      </div>
  </div>
  );
};

export default IceCream;
