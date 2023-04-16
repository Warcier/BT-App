import React from 'react';
import { Link } from 'react-router-dom';

const SetBalanceModal = () => {
  return (
    <>
      <Link to="/balancePage">
        <button className="btn">Add Balance</button>
      </Link>
    </>
  );
};

export default SetBalanceModal;
