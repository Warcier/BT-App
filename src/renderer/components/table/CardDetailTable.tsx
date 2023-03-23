import React, { useEffect, useMemo, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

function CardDetailTable() {
  const [table, setTable] = useState<any[]>([]);
  const data = useMemo(() => [...table], [table]);
  const docRef = collection(db, 'users/wallet/user');

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (doc) => {
      setTable(
        doc.docs.map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
      );
    });
  }, []);

  return (
    <div>
      <div className="container rounded-md ">
        <div className="overflow-x-auto">
          <table className="table w-[74rem] h-[15rem] text-center text-EerieBlack  ">
            <thead className="bg-success">
              <tr>
                <th className="bg-blue-300">#</th>
                <th className="bg-blue-300">ID</th>
                <th className="bg-blue-300">Name</th>
                <th className="bg-blue-300">Card</th>
                <th className="bg-blue-300">Expiration Date</th>
                <th className="bg-blue-300">CVC</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => {
                return (
                  <tr key={row.id}>
                    <th className="font-bold">{index + 1} </th>
                    <th className="font-bold">{row.CardID}</th>
                    <td className="font-bold">{row.CardName}</td>
                    <td>{row.CardNumber}</td>
                    <td className="text-success">{row.ExpirationDate}</td>
                    <td>{row.CVC}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CardDetailTable;
