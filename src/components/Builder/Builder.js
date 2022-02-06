import React from 'react';
import classes from './Builder.module.css';
import Items from './Items/Items';
import TotalPrice from './TotalPrice/TotalPrice';
import Modal from './Modal/Modal';

const Builder = ({items,price,add,remove}) => {
  return (
      <div>
          <div class={classes.builder}>
              <h3>Build your own ice cream builder</h3>
              <Items items={items} add={add} remove={remove}/>
              <TotalPrice price={price}/>
              <button type="button" class={[classes.order,'rounded'].join(' ')}>
                  Add To cart
              </button>
          </div>
          <Modal>Hello Modal</Modal>
      </div>
  );
};

export default Builder;