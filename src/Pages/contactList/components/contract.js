import React, { Component } from 'react';
import { FaFemale } from 'react-icons/fa';
import { FaMale } from 'react-icons/fa';
import { WiAlien } from 'react-icons/wi';

import './style.css';

export default class Contact extends Component {
  render() {
    return (
      <ul className="contact">
        <li>
          {this.props.order}. {this.props.item.firstName}{' '}
          {this.props.item.lastName}
        </li>
        <li>Phone: {this.props.item.phone}</li>
        <li>
          Gender:{' '}
          {this.props.item.gender === 'male' ? (
            <FaMale />
          ) : this.props.item.gender === 'female' ? (
            <FaFemale />
          ) : (
            <WiAlien />
          )}
        </li>
      </ul>
    );
  }
}
