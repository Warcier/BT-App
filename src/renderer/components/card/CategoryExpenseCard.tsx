import React, { useState } from 'react';
import { collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

const CategoryExpenseCard = () => {
  /* const [food_map, setState] = useState({});
  const [transport_map, setState] = useState({});
  const [clothes_map, setState] = useState({});
  const [other_map, setState] = useState({});

  const transactionRef = collection(db, '/users/expenditure/transaction');
  const food_query = query(transactionRef, where('expenseInfo.expenseType', '==', "food"));
  const transport_query = query(transactionRef, where('expenseInfo.expenseType', '==', "transport"));
  const clothes_query = query(transactionRef, where('expenseInfo.expenseType', '==', "clothes"));
  const other_query = query(transactionRef, where('expenseInfo.expenseType', '==', "others"));
*/
  return (
    <>
      <div className="grid grid-row-4 gap-4">
        <div>
          <div>Category</div>
        </div>
        <div>
          <span>Food</span>
          <progress className="progress w-56 h-3 " value="50" max="100" />
        </div>
        <div>
          <span>Transport</span>
          <progress className="progress w-56 h-3 " value="50" max="100" />
        </div>
        <div>
          <span>Clothes</span>
          <progress
          className="progress w-56 h-3 "
          value="50"
          max="100"
        />
        </div>
        <div>
          <span>Others</span>
          <progress className="progress w-56 h-3 " value="50" max="100" />
        </div>
      </div>
    </>
  );
};

export default CategoryExpenseCard;
