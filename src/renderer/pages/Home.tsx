import React from 'react';
import TextTag from 'renderer/components/TextTag';
import BudgetForm from 'renderer/components/forms/BudgetForm';
import PInfoForm from 'renderer/components/forms/PInfoForm';
import PInfoModal from '../components/modal/PInfoModal';
import SetBudgetModal from '../components/modal/SetBudgetModal';
import SavingCard from '../components/SavingCard';
import CCardModal from '../components/modal/CCardModal';
import CCard from '../components/CCard';
import SpendingGraph from '../components/graph/SpendingGraph';
import ExpenseForm from '../components/forms/ExpenseForm';

function Home() {
  return (
    <div>
      <div className="h-screen flex space-x-2">
        <h1 className="text-EerieBlack-500 ">
          <ExpenseForm />

          <div className="h-56 grid grid-cols-3 gap-4 content-start px-10 py-10">
            <div>
              <SavingCard />
            </div>
            <div>
              <BudgetForm />
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Home;
