import React, { Component } from 'react';
import IceCream from '../../components/IceCream/IceCream';
import Builder from '../../components/Builder/Builder';
import classes from '../../containers/IceCreamBuilder/IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {
  state = {
    items:{},
    scoops:[],
    totalPrice:0,
  };
// Access firebase api
  componentDidMount(){
    fetch('https://icecream-builder-d71a5-default-rtdb.asia-southeast1.firebasedatabase.app/items.json')
    .then((response)=>response.json())
    .then((responseData)=>{
      this.setState({
        items:responseData
      })
      
      
      // console.log(responseData);
    })
    console.log('[IceCreamBuilder]')
  }

  // componentDidUpdate(){
  //   console.log('[IceCreamBuilder] update')
  // }

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
    const {items,totalPrice,scoops} = this.state;
    return (
        <div class={['container',classes.container].join(' ')}>
            <IceCream scoops={scoops} />
            <Builder 
            items={items} 
            price={totalPrice} 
            add={this.addScoop} 
            remove={this.removeScoop}
            scoops={scoops}
            />
        </div>
    )
  }
}
