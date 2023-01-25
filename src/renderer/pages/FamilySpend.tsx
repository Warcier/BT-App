import React from 'react';
import CardDetailTable from '../components/table/CardDetailTable';
import SavingCard from '../components/SavingCard';

function FamilySpend() {
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center">
        <div>
          <CardDetailTable />
          <SavingCard />
        </div>
      </div>
    </div>
  );
}

export default FamilySpend;
