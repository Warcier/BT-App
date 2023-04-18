import React, { useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../../firebase';

const FoodBar = (props) => {
  const [foodValue, setFoodValue] = useState();
  const transactionRef = collection(db, '/users/expenditure/transaction');
  const foodQuery = query(
    transactionRef,
    where('expenseInfo.expenseType', '==', 'Food')
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
      <div className="flex space-x-12 ">
        <div>
          <span className="font-semibold text-xl">Food</span>
        </div>
        <div>
          <progress
            className="progress progress-accent w-[15rem]"
            value={foodValue}
            max={props.budget}
          />
        </div>
      </div>



    </>
  );
};

export default FoodBar;
