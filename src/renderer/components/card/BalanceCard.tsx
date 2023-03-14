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
      <div className=" w-[24.4rem] h-[13.2rem] stats bg-gradient-to-r from-blue-600 to-blue-400 text-primary-content container py-2 hover:shadow-lg">
        <div className="">
          <div className="grow">
            <div className="font-semibold text-2xl text-white py-3 pl-24">
              Current balance
            </div>
          </div>
          <div>
            <div className="text-6xl pl-24 text-white font-bold">
              ${currentBalance}
            </div>
          </div>
          <div>
            <div className="stat-actions pl-32">
              <SetBalanceModal />
            </div>
          </div>
          <div className="px-20" />
        </div>
      </div>
    </>
  );
};

export default BalanceCard;
