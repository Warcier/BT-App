import React from 'react';
import { Link } from 'react-router-dom';

const SetBalanceModal = () => {
  return (
    <>
      <Link to="/balancePage">
        <button className="btn">Add Budget</button>
      </Link>
    </>
  );
};

export default SetBalanceModal;
