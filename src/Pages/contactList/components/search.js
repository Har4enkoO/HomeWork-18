import React, { Component } from 'react';

import './style.css';

export default class Search extends Component {
  render() {
    return (
      <div className="search">
          <input
            placeholder="search"
            size="37"
            onChange={this.props.onChange}
            value={this.props.value}
            className="input"
          />
        </div>
    );
  }
}
