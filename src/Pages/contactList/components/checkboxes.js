import React, { Component } from 'react';
import { FaFemale } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';
import { WiAlien } from 'react-icons/wi';


import './style.css';

export default class Checkboxes extends Component {
  render() {
    return (
      <div className ='checkboxes'>
        <input type="checkbox" onChange = {this.props.onChangeMale} defaultChecked/> <FaMale />
        <input type="checkbox" onChange = {this.props.onChangeFemale} defaultChecked/> <FaFemale />
        <input type="checkbox" onChange = {this.props.onChangeUfo} defaultChecked/> < WiAlien/>
      </div>      
    );
  }
}