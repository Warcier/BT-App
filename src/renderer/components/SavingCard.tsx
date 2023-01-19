import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

function SavingCard() {
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    const snapshot = onSnapshot(
      doc(db, 'users', 'personal', 'budget', 'setBudget'),
      { includeMetadataChanges: true },
      (doc) => {
        setSavings(doc.get('budget_amount'));
      }
    );
  });

  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">Saving</div>
        <div className="stat-value">{savings}</div>
      </div>
    </div>
  );
}

export default SavingCard;
