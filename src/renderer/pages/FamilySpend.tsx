import React from 'react';
import CardDetailTable from '../components/table/CardDetailTable';
import CCardModal from '../components/modal/CCardModal';

function FamilySpend() {
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center space-y-2">
        <h1 className="text-blue-500">Family Expenditure</h1>
        <div>
          <CardDetailTable />
          <CCardModal />
        </div>
      </div>
    </div>
  );
}

export default FamilySpend;
