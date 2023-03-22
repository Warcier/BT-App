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
      <aside className="flex flex-col bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow h-full w-44">
        <ul>
          <li className="hover:bg-blue-600 w-44">
            <img
              className="h-6 w-6 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
              alt="svelte logo"
            />
          </a>
        </div>

        <ul>
          <li className="hover:bg-GunMetal w-44">
            <img
              className="h-6 w-6 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
              alt="svelte logo"
            />
          </a>
        </div>

        <ul>
          <li className="hover:bg-GunMetal w-44">
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
              to="/wallet"
              className="text-xl h-16 px-6 flex flex justify-center items-center w-full space-x-5"
            >
              <FontAwesomeIcon icon={faWallet} />
              <p className="font-serif">Wallet</p>
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

          <li className="hover:bg-GunMetal w-44">
            <Link
              to="/receipt"
              className="text-xl h-16 px-6 flex flex justify-center items-center w-full space-x-5"
            >
              <FontAwesomeIcon icon={faReceipt} />
              <p className="font-serif">Receipt</p>
            </Link>
          </li>

          <li className="hover:bg-GunMetal w-44">
            <Link
              to="/family"
              className="text-xl h-16 px-6 flex flex justify-center items-center w-full space-x-5"
            >
              <FontAwesomeIcon icon={faUser} />
              <p className="font-serif">Profile</p>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default NavBar;
