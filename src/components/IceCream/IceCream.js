import React from 'react';
import classes from './IceCream.module.css'

const IceCream = () => {
  return (
    <div>
    <div class={classes.icecream}>
      <p class={classes.cone}/>
      {/* <p>Please start adding scoops</p> */}
      {/* scoop component */}
      <div class={classes.cherry}/>
    </div>
  </div>
  )
};

export default IceCream;
