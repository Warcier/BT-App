import React, { useEffect, useMemo, useState } from 'react';
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../firebase';
import spacesAt4Char from './function';

function CCard() {
  const [fetch, setfetch] = useState<any>([]);
  const cardInfoRef = collection(db, '/users/wallet/userCard');

  async function getCard() {
    const q = query(cardInfoRef, where('cardInfo.Main', '==', 'Yes'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((data) => {
      setfetch(data.get('cardInfo'));
      console.log(fetch);
    });
  }

  useEffect(() => {
    getCard()
      .then((r) => r)
      .catch((e) => e);
  }, []);

  return (
    <>
      <div className="space-y-16">
        <div className="w-96 h-56 m-auto relative text-white hover:shadow-lg ">
          <div className="relative rounded-xl object-cover w-full h-full bg-gradient-to-r from-blue-700 to-green-400 " />
          <div className="w-full px-8 absolute top-4">
            <div className="flex justify-between">
              <div className="">
                <h1 className="font-light">Name</h1>
                <p className="font-medium tracking-widest">
                  {fetch.CardName}
                </p>
              </div>
              <img
                className="w-14 h-14"
                src="https://i.imgur.com/bbPHJVe.png"
                alt="*"
              />
            </div>
            <div className="pt-1">
              <h1 className="font-light">Card Number</h1>
              <p className="font-medium tracking-more-wider">{fetch.CardNumber}</p>
            </div>
            <div className="pt-6 pr-6">
              <div className="flex justify-between">
                <div className="">
                  <h1 className="font-light text-xs text-xs">Expiry</h1>
                  <p className="font-medium tracking-wider text-sm">{fetch.ExpirationDate}</p>
                </div>
                <div className="">
                  <h1 className="font-light text-xs">CVV</h1>
                  <p className="font-bold tracking-more-wider text-sm">{fetch.CVC}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CCard;
