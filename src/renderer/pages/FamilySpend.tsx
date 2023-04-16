import React from 'react';

import {
  ExpenseModal,
  CCardModal,
  PInfoModal,
  SetBudgetModal,
  SetBalanceModal,
  MainCardModal,
} from '../components/TestingComponents';

function FamilySpend() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center space-y-2">
        <div>
          <PInfoModal />
          <SetBudgetModal />
          <SetBalanceModal />
          <CCardModal />
          <MainCardModal />
          <ExpenseModal />
        </div>
      </div>
    </>
  );
}

export default FamilySpend;
