import React, { useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../../firebase';

const FoodBar = () => {
  const [foodValue, setFoodValue] = useState();
  const transactionRef = collection(db, '/users/expenditure/transaction');
  const foodQuery = query(
    transactionRef,
    where('expenseInfo.expenseType', '==', 'food')
  );
  const unsubscribe = onSnapshot(foodQuery, (querySnapshot) => {
    const foodTransaction: any[] = [0];
    querySnapshot.forEach((doc) => {
      const fetchAmount = doc.get('expenseInfo.amount');
      foodTransaction.push(fetchAmount);
    });
    const value = foodTransaction.reduce(
      (nextValue, currentValue) => nextValue + currentValue
    );
    setFoodValue(value);
  });

  return (
    <>
      <div>
        <span>Food</span>
        <progress
          className="progress  h-3 "
          value={foodValue}
          max="1000"
        />
      </div>
    </>
  );
};

export default FoodBar;
