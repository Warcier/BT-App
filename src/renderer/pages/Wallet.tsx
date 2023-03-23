import React from 'react';

import CardDetailTable from '../components/table/CardDetailTable';

const Wallet = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-white space-x-2">
        <h1 className="text-blue-500">
          <CardDetailTable />
        </h1>
      </div>
    </div>
  );
};

export default Wallet;
