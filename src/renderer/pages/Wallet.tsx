import React from 'react';
import CardDetailTable from 'renderer/components/table/CardDetailTable';

import Receipts from './Reciept';

const Wallet = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-white space-x-2">
        <div className="h-screen flex bg-white space-x-2 px-4 py-4">
          <div className="grid grid-rows-2 gap-20">
            <div>
              <CardDetailTable />
            </div>
            <div>
              <Receipts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
