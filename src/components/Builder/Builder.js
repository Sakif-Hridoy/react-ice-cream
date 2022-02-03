import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';
import TotalPrice from './TotalPrice/TotalPrice';
import Modal from './Modal/Modal';

const Builder = ({items}) => {
  return (
      <div>
          <div class={classes.builder}>
              <h3>Build your own ice cream builder</h3>
              <Items items={items}/>
              <TotalPrice/>
              <button type="button" class={[classes.order,'rounded'].join(' ')}>
                  Add To cart
              </button>
          </div>
          <Modal>Hello Modal</Modal>
      </div>
  );
};

export default Builder;