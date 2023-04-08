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
          <ExpenseModal />
          <PInfoModal />
          <SetBudgetModal />
          <SetBalanceModal />
          <CCardModal />
          <MainCardModal />
        </div>
      </div>
    </>
  );
}

export default FamilySpend;
