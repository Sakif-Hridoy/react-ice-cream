import React from 'react';
import classes from './Builder.module.css';

export const Builder = () => {
  return (
      <div>
          <div class={classes.builder}>
              <h3>Build your own ice cream builder</h3>
              {/* items */}
              {/* totalprice */}
              <button type="button" class={[classes.order,'rounded'].join()}>
                  Add To cart
              </button>
          </div>
      </div>
  );
};
