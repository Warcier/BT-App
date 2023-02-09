import React, { useState } from 'react';
import {
  ExpenseTable,
  SpendingCard,
  BalanceCard,
  SpendingGraph,
  CCard,
} from '../components/TestingComponents';

function Home() {
  return (
    <>
      <div className=" h-screen container flex items-center justify-center  ">
        <div className=" w-[75rem] h-[50rem] grid grid-flow-row-dense grid-cols-3 gap-4">
          <div className="row-span-1 bg-blue-500">
            <BalanceCard />
          </div>
          <div className="row-span-1 bg-blue-600">
            <SpendingGraph />
          </div>
          <div className="row-span-1 bg-blue-700">
            <CCard />
          </div>
          <div className="row-span-4 col-span-2 bg-blue-800">
            <ExpenseTable />
          </div>
          <div className="row-span-2 bg-blue-500">
            <SpendingCard />
          </div>
          <div className="row-span-2 bg-blue-600">06</div>
        </div>
      </div>
    </>
  );
}

export default Home;
