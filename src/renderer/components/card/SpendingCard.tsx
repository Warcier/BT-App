import React, { useEffect, useState } from 'react';

function SpendingCard(props) {
  const [overBudget, setOverBudget] = useState<string>('');

  useEffect(() => {
    if (props.total >= props.budget) {
      setOverBudget('error');
    } else {
      setOverBudget('accent');
    }
  }, [])
  return (
    <div className="stats text-white transition delay-75 ease-in-out bg-blue-600 hover:bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 transform active:-translate-y-2 shadow shadow-xl w-[24.4rem] height-fixed hover:shadow-lg">
      <div className="stat">
        <div className=" text-xl pb-1">Spending Limits</div>
        <progress
          className={`progress progress-${overBudget} w-[20rem]`}
          value={props.total}
          max={props.budget}
        />
        <span>
          ${props.total} out of ${props.total}
        </span>
      </div>
    </div>
  );
}

export default SpendingCard;
