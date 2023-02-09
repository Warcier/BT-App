import React, { useEffect, useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

function SpendingGraph() {
  const [fetchData, setfetchData] = useState([]);
  const data = [
    {
      name: 'Page A',
      uv: fetchData[0],
    },
    {
      name: 'Page B',
      uv: fetchData[1],
    },
    {
      name: 'Page C',
      uv: fetchData[2],
    },
  ];
  9;

  useEffect(() => {
    const q = query(
      collection(db, 'users', 'expenditure', 'transaction'),
      where('amount', '>=', 0)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const amount = [];
      querySnapshot.forEach((doc) => {
        const fetchAmount = doc.get('amount');
        amount.push(fetchAmount);
      });
      setfetchData(amount);
    });

    // const unsubscribe = onSnapshot(
    //   collection(db, 'users', 'expenditure', 'transaction'),
    //   (docs) => {
    //     const fetchedData = [];
    //     docs.forEach((doc) => {
    //       fetchedData.push(doc.get('amount'));
    //     });
    //     setfetchData(fetchedData);
    //   }
    // );
  });

  return (
    <>
      <div className="border rounded-lg text-center text-Flame p-4 shadow-xl bg-BlackOlive">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="left row-span-2 ">Spending Graph</div>
          <div className="right row-span-4 ">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={200}
                height={60}
                data={data}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="right row-span-2 text-center ">30%</div>
        </div>
      </div>
    </>
  );
}

export default SpendingGraph;
