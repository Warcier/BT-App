import React, { useEffect, useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../../firebase';

function SpendingGraph() {
  const [fetchData, setfetchData] = useState([]);
  const data = [
    {
      name: 'expense1',
      uv: fetchData[0],
    },
    {
      name: 'expense2',
      uv: fetchData[1],
    },
    {
      name: 'expense3',
      uv: fetchData[2],
    },
    {
      name: 'expense4',
      uv: fetchData[3],
    },
    {
      name: 'expense5',
      uv: fetchData[4],
    },
    {
      name: 'expense6',
      uv: fetchData[5],
    },
    {
      name: 'expense7',
      uv: fetchData[6],
    },
  ];

  useEffect(() => {
    const q = query(
      collection(db, 'users', 'expenditure', 'transaction'),
      orderBy('expenseInfo.timestamp', 'desc'),
      limit(7)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const amount = [];
      querySnapshot.forEach((doc) => {
        const fetchAmount = doc.get('expenseInfo.amount');
        amount.push(fetchAmount);
      });
      console.log(amount);
      setfetchData(amount);
    });
  }, []);

  return (
    <>
      <div className="rounded-lg text-center text-white drop-shadow-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800">
      <div className="rounded-lg text-center text-white shadow-xl bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:shadow-lg">
        <div className="grid grid-cols-2 gap-4 ">
          <div className="left row-span-2 p-4 text-xl">Spending Graph</div>
          <div className="right row-span-4 p-4">
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
                  stroke="white"
                  fill="white"
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
