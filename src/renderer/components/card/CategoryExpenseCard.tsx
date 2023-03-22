import React from 'react';

const CategoryExpenseCard = () => {
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
          <progress
          className="progress w-56 h-3 "
          value="50"
          max="100"
        />
        </div>
      </div>
    </>
  );
};

export default CategoryExpenseCard;
