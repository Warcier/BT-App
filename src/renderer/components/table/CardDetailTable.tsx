import React, { useEffect, useMemo, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { usePagination, useSortBy, useTable } from 'react-table';
import { db } from '../../firebase';

function CardDetailTable() {
  const [table, setTable] = useState<any[]>([]);
  const data = useMemo(() => [...table], [table]);
  const docRef = collection(db, '/users/wallet/userCard');

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
        Header: 'ID',
        accessor: 'cardInfo.CardID', // accessor must be same field as firebase
      },
      {
        Header: 'Name',
        accessor: 'cardInfo.CardName',
      },
      {
        Header: 'Card',
        accessor: 'cardInfo.CardNumber',
      },
      {
        Header: 'Expiration Date',
        accessor: 'cardInfo.ExpirationDate',
      },
      {
        Header: 'CVC',
        accessor: 'cardInfo.CVC',
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
      initialState: { pageSize: 8 },
    },
    useSortBy,
    usePagination
  );

  return (
    <div>
      <div className="container rounded-md ">
        <div className="overflow-x-auto">
          <table
            className="table w-[70rem] h-auto text-center text-EerieBlack"
            {...getTableProps()}
          >
            <thead className="bg-success">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
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
          <div className="flex flex-auto items-center justify-center my-10">
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
                className="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center ml-20"
              >
                <span className="mx-auto">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetailTable;
