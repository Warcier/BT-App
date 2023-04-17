import React, { useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../../firebase';

const FoodBar = (props) => {
  const [transportValue, setTransportValue] = useState();
  const transactionRef = collection(db, '/users/expenditure/transaction');
  const foodQuery = query(
    transactionRef,
    where('expenseInfo.expenseType', '==', 'Transport')
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
      <div className="flex space-x-4">
        <div>
          <span className="font-semibold text-xl">Transport</span>
        </div>
        <div>
          <progress
            className="progress progress progress-accent w-[15rem]"
            value={transportValue}
            max={props.budget}
          />
        </div>
      </div>
    </>
  );
};

export default FoodBar;
