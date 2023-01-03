import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-blue-500">
          Hello Tailwind
          <br />
        </h1>
      </div>
    </div>
  );
};

export default Home;
