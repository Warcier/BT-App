import React, { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, where, query } from 'firebase/firestore';
import { db } from '../../firebase';

function SpendingCard() {
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
    <div className="stats text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow w-[24.4rem] height-fixed">
      <div className="stat">
        <div className=" text-xl pb-1">Spending Limits</div>
        <progress
          className="progress progress-accent w-[20rem]"
          value={total}
          max="1000"
        />
        <span>
          ${total} out of ${budget}
        </span>
      </div>
    </div>
  );
}

export default SpendingCard;
