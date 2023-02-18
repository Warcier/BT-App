import React from 'react';

import {
  SpendingCard,
} from '../components/TestingComponents';

const Wallet = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-White space-x-2">
        <h1 className="text-blue-500">
          <SpendingCard />
        </h1>
      </div>
    </div>
  );
};

export default Wallet;
