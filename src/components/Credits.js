/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
==================================================*/
import React from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Credits = (props) => {
  // Create the list of Credit items
  let creditsView = () => {
    const { credits } = props;
    return credits.map((credit) => {  
      // Extract properties from each credit JSON array element
      let date = credit.date.slice(0,10);
      return <li key={credit.id}>{credit.amount.toFixed(2)} {credit.description} {date}</li>
    });
  }

  // Render the list of Credit items and a form to input new Credit item
  return (
    <div className="App">
      <h1>Credits</h1>
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/debits">Debits</Link>
        <Link to="/userProfile">User Profile</Link>
      </div>

      <AccountBalance accountBalance={props.accountBalance} />
      
      <form className="transaction-form" onSubmit={props.addCredit}>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" name="description" required />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input type="number" name="amount" step="0.01" min="0" required />
        </div>
        <button className="submit-button" type="submit">Add Credit</button>
      </form>

      <ul className="transaction-list">
        {creditsView()}
      </ul>
    </div>
  );
}

export default Credits;

