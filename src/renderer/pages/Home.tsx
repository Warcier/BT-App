import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import AddCardInfoBtn from '../components/addCardInfobtn';

const Home = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-blue-500">
          Hello Tailwind
          <br />
        </h1>
        <FontAwesomeIcon icon={faHome} />
      </div>
    </div>
  );
};

export default Home;
