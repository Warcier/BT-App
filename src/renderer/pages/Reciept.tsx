import React from 'react';
import { Link } from 'react-router-dom';

const Receipts = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <h1>Upload your invoice/receipt:</h1>
        <input type="file" />
      </div>
      <div className="flex items-center justify-center">
        <Link to="/" className="btn">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Receipts;
