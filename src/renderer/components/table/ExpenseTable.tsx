import React, { useEffect, useMemo, useState } from 'react';
import { usePagination, useTable } from 'react-table';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

interface Expense {
  expense: string;
  amount: number;
  date: string;
  expenseType: string;
}

const formatMoney = (value: any) => {
  if (value) {
    return `$${value.toFixed(2)}`;
  }
  return '-';
};
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

  const columns = React.useMemo(
    () => [
      {
        Header: 'Expense',
        accessor: 'expenseInfo.expense', // accessor must be same field as firebase
      },
      {
        Header: 'Amount',
        accessor: 'expenseInfo.amount',
        Cell: ({ value }) => formatMoney(value),
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 5},
    },
    usePagination
  );

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border border-transparent rounded-lg">
              <table
                className="w-[50rem] h-[30rem] text-center text-EerieBlack divide-y divide-[#F2F6D0]"
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
                  {page.map((row, i) => {
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
              <div className="flex flex-auto items-center justify-center">
                <div className="basis-4 w-64  ">
                  <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                  >
                    <span className="mx-auto">Prev</span>
                  </button>
                </div>
                <div className="basis-4 w-64  ">
                  <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                  >
                    <span className="mx-auto">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpenseTable;
