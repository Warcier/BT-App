import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import AddCardInfoBtn from '../components/addCardInfobtn';

const Home = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-White space-x-2">
        <h1 className="text-EerieBlack-500 ">
          Hello Tailwind
          <br />
        </h1>
        <FontAwesomeIcon icon={faHome} />
      </div>
    </div>
  );
};

export default Home;
