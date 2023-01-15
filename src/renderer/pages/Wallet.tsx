import React from 'react';
import { Link } from 'react-router-dom';

const Wallet = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-blue-200">
        <h1 className="text-blue-500">Wallet Page</h1>
        <Link to="/" className="btn">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Wallet;
