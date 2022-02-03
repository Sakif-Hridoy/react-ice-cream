import React, { Component } from 'react';
import IceCream from '../components/IceCream/';
import Builder from '../components/Builder';
import classes from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {
  render() {
    return (
        <div class={['container',classes.container].join(' ')}>
            <IceCream/>
            <Builder/>
        </div>
    )
  }
}
