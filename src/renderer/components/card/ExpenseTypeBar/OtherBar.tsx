import React, { useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../../firebase';

const FoodBar = (props) => {
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
      <div className="flex space-x-11">
        <div>
          <span className="font-semibold text-xl">Other</span>
        </div>
        <div>
          <progress
            className="progress progress-accent w-[15rem]"
            value={otherValue}
            max={props.budget}
          />
        </div>
      </div>
    </>
  );
};

export default FoodBar;
