import React from 'react';
import { Link } from 'react-router-dom';
import CCardModal from 'renderer/components/modal/CCardModal';
import CardDetailTable from 'renderer/components/table/CardDetailTable';

const Wallet = () => {
  return (
    <div>
      <div className="h-screen grid grid-cols-1 flex px-3 py-3">
        <div>
          <CardDetailTable />
        </div>
        <div>
          <CCardModal />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
