import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faWallet,
  faUser,
  faBook,
} from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <div>
      <div className="bg-GunMetal">
        <aside className="flex flex-col items-center shadow h-full">
          <div className="container p-100">
            <div className="h-16 flex items-center w-full ">
              <h1>Budget Tracker</h1>
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
                  to="/receipt"
                  className="text-xl h-16 px-6 flex flex justify-center items-center w-full"
                >
                  <FontAwesomeIcon icon={faBook} />
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
          </div>
        </aside>
      </div>
    </div>
  );
}

export default NavBar;
