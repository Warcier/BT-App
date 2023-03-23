import React from 'react';

import {
  ExpenseModal,
  CCardModal,
  PInfoModal,
  SetBudgetModal,
  SetBalanceModal,
} from '../components/TestingComponents';

function FamilySpend() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center space-y-2">
        <div>
          <ExpenseModal />
          <CCardModal />
          <PInfoModal />
          <SetBudgetModal />
          <SetBalanceModal />
          <CCardModal />
        </div>
      </div>
    </>
  );
}

export default FamilySpend;
