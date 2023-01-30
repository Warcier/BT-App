import React, { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import CCardModal from '../modal/CCardModal';
import TextTag from '../TextTag';

function CardDetailTable() {
  const [table, setTable] = useState<any[]>([]);

  const docRef = collection(db, 'users/wallet/user');

  const onRefresh = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (doc) => {
      setTable(
        doc.docs.map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
      );
    });
  });

  return (
    <div>
      <div className="container border-2 rounded-md border-LightCyan">
        <div className="overflow-x-auto">
          <table className="table table-zebra w-[74rem] h-[15rem] text-center text-EerieBlack ">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Card</th>
                <th>Expiration Date</th>
                <th>CVC</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row, index) => {
                return (
                  <tr key={row.id}>
                    <th>{index + 1} </th>
                    <td>{row.CardName}</td>
                    <td>{row.CardNumber}</td>
                    <td>{row.ExpirationDate}</td>
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
