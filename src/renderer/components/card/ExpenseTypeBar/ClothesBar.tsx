
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
      <>
        <div className="flex space-x-8 ">
          <div>
            <span className="font-semibold text-xl">Clothes</span>
          </div>
          <div>
            <progress
              className="progress progress-accent  w-[15rem]"
              value={clothesValue}
              max="1000"
            />
          </div>
        </div>


      </>
    </>
  );
};

export default FoodBar;
