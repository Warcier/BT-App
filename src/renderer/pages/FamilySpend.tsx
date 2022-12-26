import React from 'react';
import { Link } from 'react-router-dom';

const FamilySpend = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-pink-200">
        <h1 className="text-blue-500">Family Expenditure</h1>
        <Link to="/" className="btn">
          Home
        </Link>
      </div>
    </div>
  );
};

export default FamilySpend;
