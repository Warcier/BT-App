import React from 'react';
import PInfoModal from '../components/modal/PInfoModal';
import SetBudgetModal from '../components/modal/SetBudgetModal';
import SavingCard from '../components/SavingCard';
import CCardModal from '../components/modal/CCardModal';
import CCard from '../components/CCard';
import SpendingGraph from '../components/graph/SpendingGraph';
import ExpenseForm from '../components/forms/ExpenseForm';

function Home() {
  return (
    <>
      <div className="h-screen flex items-center justify-center space-x-2">
        <h1 className="text-EerieBlack-500 ">
          <ExpenseForm />
        </h1>
      </div>
    </>
  );
}

export default Home;
