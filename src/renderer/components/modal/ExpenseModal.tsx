import React from 'react';
import { Link } from 'react-router-dom';

function ExpenseModal() {
  return (
    <>
      <Link to="/addExpense">
        <button className="btn">Add Expense</button>
      </Link>
    </>
  );
}

export default ExpenseModal;
