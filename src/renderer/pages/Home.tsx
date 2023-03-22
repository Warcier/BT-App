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
    <>
      <div className=" h-max container bg-white flex items-center justify-center  ">
        <div className=" w-[75rem] h-[50rem] grid grid-flow-row-dense grid-cols-3 gap-4 py-5">
          <div className="row-span-1 ">
            <BalanceCard />
          </div>
          <div className="row-span-1 ">
            <div className="mb-3">
              <SpendingGraph />
            </div>
            <div className="mb-3">
              <SpendingCard />
            </div>
          </div>
          <div className="row-span-1 ">
            <CCard />
          </div>
          <div className="row-span-4 col-span-2 ">
            <ExpenseTable />
          </div>
          <div className="row-span-2 bg-blue-500">
            05
          </div>
          <div className="row-span-2 bg-blue-600">06</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
