// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
      <div className="balance-container">
        <h3>Account Balance: ${this.props.accountBalance.toFixed(2)}</h3>
      </div>
    );
  }
}

export default AccountBalance;
