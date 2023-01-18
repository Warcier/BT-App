import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faWallet,
  faUser,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <aside className="flex flex-col items-center bg-white text-gray-700 shadow h-full">
        <div className="h-16 flex items-center w-full">
          <a className="h-6 w-6 mx-auto" href="http://svelte.dev/">
            <img
              className="h-6 w-6 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
              alt="svelte logo"
            />
          </a>
        </div>

        <ul>
          <li className="hover:bg-gray-100">
            <Link
              to="/"
              className="text-xl h-16 px-6 flex flex justify-center items-center w-full"
            >
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>

          <li className="hover:bg-gray-100">
            <Link
              to="/wallet"
              className="text-xl h-16 px-6 flex flex justify-center items-center w-full"
            >
              <FontAwesomeIcon icon={faWallet} />
            </Link>
          </li>

          <li className="hover:bg-gray-100">
            <Link
              to="/family"
              className="text-xl h-16 px-6 flex flex justify-center items-center w-full"
            >
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>

          <li className="hover:bg-gray-100">
            <Link
              to="/"
              className="text-xl h-16 px-6 flex flex justify-center items-center w-full"
            >
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>

          <li className="hover:bg-gray-100">
            <Link
              to="/"
              className="text-xl h-16 px-6 flex flex justify-center items-center w-full"
            >
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Navbar;
