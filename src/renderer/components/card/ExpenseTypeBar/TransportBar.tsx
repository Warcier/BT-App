import React, { useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../../firebase';

const FoodBar = () => {
  const [transportValue, setTransportValue] = useState();
  const transactionRef = collection(db, '/users/expenditure/transaction');
  const foodQuery = query(
    transactionRef,
    where('expenseInfo.expenseType', '==', 'transport')
  );
  const unsubscribe = onSnapshot(foodQuery, (querySnapshot) => {
    const transportTransaction: any[] = [0];
    querySnapshot.forEach((doc) => {
      const fetchAmount = doc.get('expenseInfo.amount');
      transportTransaction.push(fetchAmount);
    });
    const value = transportTransaction.reduce(
      (nextValue, currentValue) => nextValue + currentValue
    );
    setTransportValue(value);
  });

  return (
    <>
      <div>
        <span>Transport</span>
        <progress
          className="progress w-56 h-3 "
          value={transportValue}
          max="1000"
        />
      </div>
    </>
  );
};

export default FoodBar;
