import React from 'react';
import { Link } from 'react-router-dom';
import CardDetailTable from '../components/table/CardDetailTable';

function FamilySpend() {
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center">
        <div>
          <CardDetailTable />
        </div>
      </div>
    </div>
  );
}

export default FamilySpend;
