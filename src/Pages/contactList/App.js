import React, { Component } from 'react';
import contacts from './components/contacts';
import Contract from './components/contract';
import Search from './components/search';
import Checkboxes from './components/checkboxes';

import './components/style.css';

class Contracts extends Component {
  state = {
    male: true,
    female: true,
    ufo: true,
    phoneBook: contacts,
    filter: ''
  };

  changeFilter = element => {
    this.setState({ filter: element.target.value });
  };

  changeCheckboxMale = () => {
    this.setState({ male: !this.state.male });
  };
  changeCheckboxFemale = () => {
    this.setState({ female: !this.state.female });
  };
  changeCheckboxUfo = () => {
    this.setState({ ufo: !this.state.ufo });
  };

  render() {
    const data = this.state.phoneBook.filter(
      item =>
        ((item.lastName
          .toLowerCase()
          .includes(this.state.filter.toLowerCase()) === true ||
        item.firstName
          .toLowerCase()
          .includes(this.state.filter.toLowerCase()) === true ||
        item.phone.includes(this.state.filter) === true) && (this.state[item.gender]))
    );
    return (
      <div className="phone">
        <Search onChange={this.changeFilter} value={this.state.filter} />
        <Checkboxes
          onChangeMale={this.changeCheckboxMale}
          onChangeFemale={this.changeCheckboxFemale}
          onChangeUfo={this.changeCheckboxUfo}
        />
        <div className="monitor">
          {data.map((item, index) => (
            <Contract item={item} order={++index} />
          ))}
        </div>
      </div>
    );
  }
}

export default Contracts;
