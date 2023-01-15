import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'renderer/components/navbar';
import AddCardInfoBtn from '../components/addCardInfobtn';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-blue-500">
          Hello Tailwind
          <br />
        </h1>

        <FontAwesomeIcon icon={faHome} />
        <div>
          <Link to="/test" className="btn">
            Wallet
            <br />
          </Link>
        </div>
        <div>
          <Link to="/family" className="btn">
            family
          </Link>
        </div>
        <div>
          <AddCardInfoBtn />
        </div>
      </div>
    </div>
  );
};

export default Home;
