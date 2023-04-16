import React from 'react';
import { Link } from 'react-router-dom';

function MainCardModal() {
  return (
    <>
      <Link to="/mainCardPage">
        <button className="btn">Main Card</button>
      </Link>
    </>
  );
}

export default MainCardModal;
