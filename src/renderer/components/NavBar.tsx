import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { MainCardModal } from './TestingComponents';

const Logo = require('./assets/logo.png');

const NavBar = () => {
  return (
    <div>
      <aside className="flex flex-col bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow h-full w-44 py-10">
        <ul>
          <div className="w-44 -mt-14 -mb-6 pl-6 active:translate-y-2">
            <img className="h-32 w-32 fill-black" src={String(Logo)} alt="*" />
          </div>

          <li className="hover:bg-blue-600 w-44">
            <Link
              to="/"
              className="text-xl h-16 px-6 flex flex justify-center items-center w-full space-x-5"
            >
              <FontAwesomeIcon icon={faHome} />
              <p className="font">Home</p>
            </Link>
          </li>

          <li className="hover:bg-blue-600 w-44">
            <Link
              to="/receipt"
              className="text-xl h-16 px-6 flex flex justify-center items-center w-full space-x-5"
            >
              <FontAwesomeIcon icon={faUser} />
              <p className="font-serif">Receipt</p>
            </Link>
          </li>

          <li className="hover:bg-blue-600 w-44">
            <Link
              to="/personalInfo"
              className="text-xl h-16 px-6 flex flex justify-center items-center w-full space-x-5"
            >
              <FontAwesomeIcon icon={faUser} />
              <p className="font-serif">Personal</p>
            </Link>
          </li>
        </ul>
        <div className="absolute bottom-2 left-7">
          <MainCardModal />
        </div>
      </aside>
    </div>
  );
};

export default NavBar;
