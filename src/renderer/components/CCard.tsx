import React, { useEffect, useMemo, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import spacesAt4Char from './function';

const Master = require('./assets/MasterCard.png');
const Visa = require('./assets/Visa.png');

function CCard() {
  const [fetch, setfetch] = useState<any>([]);
  const [cardType, setCardType] = useState<any>();
  const cardInfoRef = collection(db, '/users/wallet/userCard');

  async function getCard() {
    const q = query(cardInfoRef, where('cardInfo.Main', '==', 'Yes'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((data) => {
      setfetch(data.get('cardInfo'));
      if (data.get('cardInfo.Type') === 'master') {
        setCardType(Master);
      } else {
        setCardType(Visa);
      }
    });
  }

  useEffect(() => {
    getCard()
      .then((r) => r)
      .catch((e) => e);
  }, []);

  return (
    <>
      <div className="w-96 h-56 m-auto relative rounded-xl space-y-16 transition bg-gradient-to-r from-blue-700 to-green-400 transform hover:transparent ">
        <div className="w-96 h-56 m-auto relative rounded-xl text-white hover:bg-gradient-to-r from-green-400 to-blue-700">
          <div className="relative rounded-xl object-cover w-full h-full shadow-lg " />
          <div className="w-full px-8 absolute top-4">
            <div className="flex justify-between">
              <div className="">
                <h1 className="font-light">Name</h1>
                <p className="font-medium tracking-widest">{fetch.CardName}</p>
              </div>
              <img className="w-[80px] h-[40px]" src={String(cardType)} alt="*" />
            </div>
            <div className="pt-1">
              <h1 className="font-light">Card Number</h1>
              <p className="font-medium tracking-more-wider">
                {spacesAt4Char(String(fetch.CardNumber))}
              </p>
            </div>
            <div className="pt-6 pr-6">
              <div className="flex justify-between">
                <div className="">
                  <h1 className="font-light text-xs text-xs">Expiry</h1>
                  <p className="font-medium tracking-wider text-sm">
                    {fetch.ExpirationDate}
                  </p>
                </div>
                <div className="">
                  <h1 className="font-light text-xs">CVV</h1>
                  <p className="font-bold tracking-more-wider text-sm">
                    {fetch.CVC}
                  </p>
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
