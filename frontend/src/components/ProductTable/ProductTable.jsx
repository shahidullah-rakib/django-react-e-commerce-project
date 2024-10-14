import React, { useMemo, useState } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';

// Search input component
const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  return (
    <span>
      Search:{' '}
      <input
        value={globalFilter || ''}
        onChange={(e) => setGlobalFilter(e.target.value || undefined)}
        placeholder="Search products..."
        style={{
          fontSize: '1.1rem',
          marginBottom: '10px',
        }}
      />
    </span>
  );
};

// ProductTable component
const ProductTable = ({ products }) => {
  const [filterInput, setFilterInput] = useState('');

  // Define the columns
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // The field name in your product object
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Stock',
        accessor: 'stock',
      },
      {
        Header: 'Category',
        accessor: 'category_id',
      },
      {
        Header: 'Created At',
        accessor: 'created_at',
      },
      {
        Header: 'Updated At',
        accessor: 'updated_at',
      },
      {
        Header: 'Actions',
        Cell: ({ row }) => (
          <div>
            <button
              onClick={() => handleUpdate(row.original.id)}
              className="btn btn-primary"
              style={{ marginRight: '10px' }}
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(row.original.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  // Use the useTable hook to define the table instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state: { globalFilter },
  } = useTable(
    {
      columns,
      data: products,
    },
    useGlobalFilter, // for search functionality
    useSortBy // for sorting columns
  );

  // Function to handle update (this is where your actual update logic will go)
  const handleUpdate = (id) => {
    alert(`Update product with ID: ${id}`);
  };

  // Function to handle delete (this is where your actual delete logic will go)
  const handleDelete = (id) => {
    alert(`Delete product with ID: ${id}`);
  };

  return (
    <div>
      <GlobalFilter
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      <table
        {...getTableProps()}
        style={{ width: '100%', borderCollapse: 'collapse' }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    border: '1px solid black',
                    padding: '10px',
                    backgroundColor: '#f2f2f2',
                    cursor: 'pointer',
                  }}
                >
                  {column.render('Header')}
                  {/* Add sorting indicator */}
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      border: '1px solid black',
                      padding: '10px',
                      textAlign: 'center',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
