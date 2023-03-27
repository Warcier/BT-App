import React, { useState } from 'react';
import FoodBar from './ExpenseTypeBar/FoodBar';
import TransportBar from './ExpenseTypeBar/TransportBar';
import ClothesBar from './ExpenseTypeBar/ClothesBar';
import OtherBar from './ExpenseTypeBar/OtherBar';

const CategoryExpenseCard = (props) => {
  return (
    <>
      <div className="border-2 rounded-lg text-white w-[390px] h-[320px] grid h-screen place-items-center
      bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow shadow-xl hover:shadow-lg">
        <div className="grid grid-row-4 gap-4">
          <div>
            <div>
              <h1 className="text-4xl font-bold text-center">Category</h1>
            </div>
          </div>
          <div className="flex flex-col gap-10 ">
            <div>
              <FoodBar budget={props.budget} />
            </div>
            <div>
              <TransportBar budget={props.budget} />
            </div>
            <div>
              <ClothesBar budget={props.budget} />
            </div>
            <div>
              <OtherBar budget={props.budget} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryExpenseCard;
