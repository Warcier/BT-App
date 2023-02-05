import React, { useEffect, useMemo, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import TextTag from '../TextTag';

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
                <th>#</th>
                <th>Name</th>
                <th>Card</th>
                <th>Expiration Date</th>
                <th>CVC</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => {
                return (
                  <tr key={row.id}>
                    <th className="font-bold">{index + 1} </th>
                    <td className="font-bold">{row.CardName}</td>
                    <td>{row.CardNumber}</td>
                    <td className="text-success">{row.ExpirationDate}</td>
                    <td>
                      <TextTag text={row.CVC} bg_color="bg-Flame" />
                    </td>
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
