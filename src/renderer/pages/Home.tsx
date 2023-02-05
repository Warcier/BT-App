import React, { useState } from 'react';
import { ExpenseTable } from '../components/TestingComponents';

function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center space-x-2">
        <h1 className="text-EerieBlack-500 ">
          <ExpenseTable />
        </h1>
      </div>
    </>
  );
}

export default Home;
