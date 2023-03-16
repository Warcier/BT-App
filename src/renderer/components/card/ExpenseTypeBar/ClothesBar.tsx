
import React, { useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../../firebase';

const FoodBar = () => {
  const [clothesValue, setClothesValue] = useState();
  const transactionRef = collection(db, '/users/expenditure/transaction');
  const foodQuery = query(
    transactionRef,
    where('expenseInfo.expenseType', '==', 'clothes')
  );
  const unsubscribe = onSnapshot(foodQuery, (querySnapshot) => {
    const clothesTransaction: any[] = [0];
    querySnapshot.forEach((doc) => {
      const fetchAmount = doc.get('expenseInfo.amount');
      clothesTransaction.push(fetchAmount);
    });
    const value = clothesTransaction.reduce(
      (nextValue, currentValue) => nextValue + currentValue
    );
    setClothesValue(value);
  });

  return (
    <>
      <div>
        <span>Clothes</span>
        <progress
          className="progress w-56 h-3 "
          value={clothesValue}
          max="1000"
        />
      </div>
    </>
  );
};

export default FoodBar;
