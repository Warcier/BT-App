import React, { useState } from 'react';
import FoodBar from './ExpenseTypeBar/FoodBar';
import TransportBar from './ExpenseTypeBar/TransportBar';
import ClothesBar from './ExpenseTypeBar/ClothesBar';
import OtherBar from './ExpenseTypeBar/OtherBar';

const CategoryExpenseCard = () => {
  return (
    <>
      <div>
        <div className="grid grid-row-4 gap-4">
          <div>
            <div>Category</div>
          </div>
          <div>
            <FoodBar />
          </div>
          <div>
            <TransportBar />
          </div>
          <div>
            <ClothesBar />
          </div>
          <div>
            <OtherBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryExpenseCard;
