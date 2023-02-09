import React, { useState, useEffect } from 'react';
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
      <div className=" w-[24rem] h-[15rem] stats bg-primary text-primary-content container items-center justify-center ">
        <div className="flex flex-col ">
          <div className="grow">
            <div className="stat-title font-semibold text-2xl ">Current balance</div>
          </div>
          <div>
            <div className="text-6xl font-bold">${currentBalance}</div>
          </div>
          <div>
            <div className="stat-actions">
              <SetBalanceModal />
            </div>
          </div>
        </div>
        <div className="stat items-center justify-center" />
      </div>
    </>
  );
};

export default BalanceCard;
