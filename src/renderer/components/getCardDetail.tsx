import React, { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

const GetCardDetail = () => {
  const [table, setTable] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const docRef = collection(db, 'users');

  const onRefresh = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
  };

  useEffect(() => {
    const getCardData = async () => {
      const querySnapshot = await getDocs(docRef);
      setTable(
        querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    };

    if (loading) {
      getCardData().catch((e) => console.log(`error in fetching data:\n${e}`));
      setLoading(false);
      console.log('Rendered after true');
    }
  }, [loading]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
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
                  <td>{row.CVC}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-center">
          {/* TODO: automatically refresh on submit the data */}
          <button onClick={onRefresh} className="btn">
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetCardDetail;
