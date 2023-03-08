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
      <div className=" w-[24.4rem] h-[14.2rem] stats bg-gradient-to-r from-blue-600 to-blue-400 text-primary-content container items-center justify-center ">
        <div className="flex flex-col ">
          <div className="grow">
            <div className="font-semibold text-2xl text-white py-3">
              Current balance
            </div>
          </div>
          <div>
            <div className="text-6xl text-white font-bold">${currentBalance}</div>
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
