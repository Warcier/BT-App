import React from 'react';
import { Link } from 'react-router-dom';

function SetBudgetModal() {
  return (
    <>
      <Link to="/budgetPage">
        <button className="btn">Set Budget</button>
      </Link>
    </>
  );
}

export default SetBudgetModal;
