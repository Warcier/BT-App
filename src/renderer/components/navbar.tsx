import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWallet, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <div className="flex ">
        <div className="flex flex-col h-screen p-3 bg-white shadow w-60 ">
          <div className="space-y-3">
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Budget Tracker</h2>
            </div>
            <div className="flex-1">
              <ul className="pt-2 pb-4 space-y-1 text-sm">
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                    <FontAwesomeIcon icon={faHome} />
                    <Link to="/family" className="btn">
                      Home
                      <br />
                    </Link>
                  </div>
                </li>
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                    <FontAwesomeIcon icon={faWallet} />
                    <Link to="/family" className="btn">
                      Wallet
                      <br />
                    </Link>
                  </div>
                </li>
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                    <FontAwesomeIcon icon={faWallet} />
                    <Link to="/family" className="btn">
                      family
                    </Link>
                  </div>
                </li>
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                    <FontAwesomeIcon icon={faUser} />
                    <Link to="/family" className="btn">
                      Profile
                    </Link>
                  </div>
                </li>
                <li className="rounded-sm">
                  <div className="flex items-center p-2 space-x-3 rounded-md">
                    <FontAwesomeIcon icon={faUser} />
                    <Link to="/family" className="btn">
						Receipts
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
