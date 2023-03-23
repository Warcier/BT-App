import React from 'react';
import { Link } from 'react-router-dom';

function CCardModal() {
  return (
    <>
      <Link to="/cardPage">
        <button className="btn">Add Card</button>
      </Link>
    </>
  );
}

export default CCardModal;
