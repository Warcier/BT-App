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
      <div className="w-[24.4rem] h-[13.1rem] rounded-lg transition bg-blue-500 hover:bg-gradient-to-r from-blue-600 to-blue-400 transform active:-translate-y-2 hover:shadow-lg">
        <div className="flex flex-col justify-center items-center h-[12rem]">
          <div >
            <div className="font-semibold text-2xl text-white py-3">
              Current balance
            </div>
          </div>
          <div>
            <div className="text-6xl text-white font-bold">
              ${currentBalance}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BalanceCard;
