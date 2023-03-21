import React, { useState } from 'react';
import FoodBar from './ExpenseTypeBar/FoodBar';
import TransportBar from './ExpenseTypeBar/TransportBar';
import ClothesBar from './ExpenseTypeBar/ClothesBar';
import OtherBar from './ExpenseTypeBar/OtherBar';

const CategoryExpenseCard = () => {
  return (
    <>
      <div className="bg-blue-500 border-2 rounded-lg text-white w-[390px] h-[380px]">
        <div className="grid grid-row-4 gap-4">
          <div>
            <div>
              <h1 className="text-xl font-bold text-center">Category</h1>
            </div>
          </div>
          <div className="flex flex-col gap-8 ">
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
      </div>
    </>
  );
};

export default CategoryExpenseCard;
