import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faWallet,
  faUser,
  faBook,
  faReceipt,
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div>
      <aside className="flex flex-col bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow h-full w-44 py-10">
        <ul>
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
      </aside>
    </div>
  );
};

export default NavBar;
