import React, { useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

interface Expense {
  expense: string;
  amount: number;
  date: string;
  expenseType: string;
}

const ExpenseTable = () => {
  const [table, setTable] = useState<any[]>([]);
  const data = useMemo(() => [...table], [table]);
  const docRef = collection(db, '/users/expenditure/transaction');

  useEffect(() => {
    const unsubscribe = onSnapshot(docRef, (doc) => {
      setTable(
        doc.docs.map((docs) => {
          return { ...docs.data(), id: docs.id };
        })
      );
    });
  }, []);

  // const data = React.useMemo(
  //  () => [
  //    {
  //      expense: 'Bus',
  //      amount: 12,
  //      date: '10/12/23',
  //      expenseType: 'Transportation',
  //    },
  //    {
  //      expense: 'Hello',
  //      amount: 'World',
  //      date: 'World',
  //      expenseType: 'World',
  //    },
  //    {
  //      expense: 'Hello',
  //      amount: 'World',
  //      date: 'World',
  //      expenseType: 'World',
  //    },
  //  ],
  //  []
  // );
  const columns = React.useMemo(
    () => [
      {
        Header: 'Expense',
        accessor: 'expenseInfo.expense', // accessor must be same field as firebase
      },
      {
        Header: 'Amount',
        accessor: 'expenseInfo.amount',
      },
      {
        Header: 'Date',
        accessor: 'expenseInfo.date',
      },
      {
        Header: 'Expense Type',
        accessor: 'expenseInfo.expenseType',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <div className="flex flex-col">
        {console.log(data)}
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border border-transparent rounded-lg">
              <table
                className="w-[40rem] h-[15rem] text-center text-EerieBlack divide-y divide-[#F2F6D0]"
                {...getTableProps()}
              >
                <thead className="bg-[#e4be9e]">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          {...column.getHeaderProps()}
                        >
                          {column.render('Header')}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  className="bg-transparent divide-y divide-[#F2F6D0]"
                  {...getTableBodyProps()}
                >
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                              {...cell.getCellProps()}
                            >
                              {cell.render('Cell')}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseTable;
