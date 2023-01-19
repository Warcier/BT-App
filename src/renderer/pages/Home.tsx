import React from 'react';
import PInfoModal from '../components/modal/PInfoModal';
import SetBudgetModal from '../components/modal/SetBudgetModal';
import SavingCard from '../components/SavingCard';
import CCardModal from '../components/modal/CCardModal';

function Home() {
  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-gray-200">
        <PInfoModal />
        <SetBudgetModal />
        <SavingCard />
        <CCardModal />
      </div>
    </div>
  );
}

export default Home;
