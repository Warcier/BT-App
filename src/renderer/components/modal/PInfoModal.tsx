import React from 'react';
import { Link } from 'react-router-dom';

function PInfoModal() {
  return (
    <>
      <Link to="/infoPage">
        <button className="btn">Update Information</button>
      </Link>
    </>
  );
}

export default PInfoModal;
