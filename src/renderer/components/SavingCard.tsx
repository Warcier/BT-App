import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

function SavingCard() {
  const [savings, setSavings] = useState<any>([]);

  useEffect(() => {
    const snapshot = onSnapshot(
      doc(db, 'users', 'personal', 'budget', 'setBudget'),
      { includeMetadataChanges: true },
      (data) => {
        setSavings(data.get('budgetInfo'));
      }
    );
  }, []);

  return (
    <div className="stats bg-secondary shadow">
      <div className="stat">
        <div className="stat-title text-xl ">Spending Limits</div>
        <progress
          className="progress progress-accent w-56"
          value={1}
          max="1000"
        />
        <span> ${1} out of $1000 </span>
      </div>
    </div>
  );
}

export default SavingCard;
