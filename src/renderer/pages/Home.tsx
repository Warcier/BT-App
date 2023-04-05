import React, { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import {
  ExpenseTable,
  SpendingCard,
  BalanceCard,
  SpendingGraph,
  CCard,
  CategoryExpenseCard,
  SetBalanceModal,
  SetBudgetModal,
} from '../components/TestingComponents';
import { db } from '../firebase';

function Home() {
  const [budget, setBudget] = useState<any>([]);

  const [total, setTotal] = useState<number>();
  const budgetRef = doc(db, 'users/personal/budget/setBudget');
  const transactionRef = collection(db, '/users/expenditure/transaction');

  useEffect(() => {
    // Get all the transaction amount using query
    const q = query(transactionRef, where('expenseInfo.amount', '>=', 0));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const allTransaction: any[] = [];
      querySnapshot.forEach((doc) => {
        const fetchAmount = doc.get('expenseInfo.amount');
        allTransaction.push(fetchAmount);
      });
      const value = allTransaction.reduce(
        (nextValue, currentValue) => nextValue + currentValue
      );
      setTotal(value);
    });
    // Get the budget amount
    const snapshot = onSnapshot(
      budgetRef,
      { includeMetadataChanges: true },
      (data) => {
        setBudget(data.get('budget_amount'));
      }
    );
  }, []);

  return (
    <div>
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
              <SpendingCard total={total} budget={budget} />
            </div>
          </div>
          <div className="row-span-1 ">
            <CCard />
          </div>
          <div className="row-span-4 col-span-2 ">
            <ExpenseTable />
          </div>
          <div className="row-span-1">
            <CategoryExpenseCard budget={budget} />
          </div>
          <div className="row-span-1 ">
            <div className="flex flex-row gap-4 items-center justify-center ">
              <div>
                <SetBalanceModal />
              </div>
              <div>
                <SetBudgetModal />
              </div>
            </div>
          </div>
          <div className="row-span-2 bg-blue-700 ">08</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
