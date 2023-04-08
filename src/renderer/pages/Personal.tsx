import React from 'react';
import PersonalCard from '../components/card/PersonalCard';
import CardDetailTable from '../components/table/CardDetailTable';

function Personal() {
  return (
    <>
      <PersonalCard />
      <div className=" m-10 flex items-center justify-center bg-white space-x-2">
        <h1 className="text-blue-500">
          <CardDetailTable />
        </h1>
      </div>
    </>
  );
}

export default Personal;
