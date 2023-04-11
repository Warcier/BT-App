import React from 'react';
import PersonalCard from '../components/card/PersonalCard';
import CardDetailTable from '../components/table/CardDetailTable';

function Personal() {
  return (
    <>
      <div>
        <PersonalCard />
        <div className=" m-5 flex items-center justify-center bg-white space-x-2">
          <h1 className="text-blue-500">
            <h1 className="text-center font-bold text-4xl my-3">Credit Card</h1>
            <CardDetailTable />
          </h1>
        </div>
      </div>
    </>
  );
}

export default Personal;
