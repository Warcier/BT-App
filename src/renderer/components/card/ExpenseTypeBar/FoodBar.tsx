import React, { useState } from 'react';
import { collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

const FoodBar = () => {
  const [food_map, setState] = useState({});
  const transactionRef = collection(db, '/users/expenditure/transaction');
  const food_query = query(
    transactionRef,
    where('expenseInfo.expenseType', '==', 'food')
  );

  return (
    <>
      <div>
        <span>Food</span>
        <progress className="progress w-56 h-3 " value="50" max="100" />
      </div>
    </>
  );
};

export default FoodBar;
