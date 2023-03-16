import React, { useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../../firebase';

const FoodBar = () => {
  const [otherValue, setOtherValue] = useState();
  const transactionRef = collection(db, '/users/expenditure/transaction');
  const foodQuery = query(
    transactionRef,
    where('expenseInfo.expenseType', '==', 'other')
  );

  const unsubscribe = onSnapshot(foodQuery, (querySnapshot) => {
    const otherTransaction: any[] = [0];
    querySnapshot.forEach((doc) => {
      const fetchAmount = doc.get('expenseInfo.amount');
      otherTransaction.push(fetchAmount);
    });
    const value = otherTransaction.reduce(
      (nextValue, currentValue) => nextValue + currentValue
    );
    setOtherValue(value);
  });

  return (
    <>
      <div>
        <span>Other</span>
        <progress
          className="progress w-56 h-3 "
          value={otherValue}
          max="1000"
        />
      </div>
    </>
  );
};

export default FoodBar;
