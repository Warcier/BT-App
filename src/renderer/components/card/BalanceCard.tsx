import React, { useState, useEffect} from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import SetBalanceModal from '../modal/SetBalanceModal';

const BalanceCard = () => {
  const [currentBalance, setCurrentBalance] = useState<any>(0);

  useEffect(() => {
    const snapshot = onSnapshot(
      doc(db, 'users', 'personal', 'balance', 'setBalance'),
      { includeMetadataChanges: true },
      (data) => {
        setCurrentBalance(data.get('current_balance'));
      }
    );
  }, []);

  return (
    <>
      <div className="stats bg-primary text-primary-content">
        <div className="stat">
          <div className="stat-title">Current balance</div>
          <div className="stat-value">${currentBalance}</div>
          <div className="stat-actions">
            <SetBalanceModal />
          </div>
        </div>

      </div>
    </>
  );
};

export default BalanceCard;
