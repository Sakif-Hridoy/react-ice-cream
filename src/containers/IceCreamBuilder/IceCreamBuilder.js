import React, { Component } from 'react';
import IceCream from '../../components/IceCream/IceCream';
import Builder from '../../components/Builder/Builder';
import classes from '../../containers/IceCreamBuilder/IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {
  state = {
    items:{
      vanilla:45,
      chocolate:50,
      lemon:35,
      orange:40,
      strawberry:60,
    },
    scoops:[],
    totalPrice:0,
  };

  addScoop = (scoop)=>{
      const {scoops,items,totalPrice} = this.state;
      const workingScoops = [...scoops];
      workingScoops.push(scoop);
      this.setState((prevState)=>{
        return {
          scoops:workingScoops,
          totalPrice:prevState.totalPrice + items[scoop],
        };
      })
  }

  removeScoop = (scoop)=>{
    const {scoops,items} = this.state;
    const workingScoops = [...scoops];
    const scoopIndex = workingScoops.findIndex((sc)=>sc ===scoop);
    workingScoops.splice(scoopIndex,1);
    this.setState((prevState)=>{
      return {
        scoops:workingScoops,
        totalPrice:prevState.totalPrice - items[scoop],
      };
    })
  }

  render() {
    const {items,totalPrice} = this.state;
    return (
        <div class={['container',classes.container].join(' ')}>
            <IceCream />
            <Builder items={items} price={totalPrice} add={this.addScoop} remove={this.removeScoop}/>
        </div>
    )
  }
}
