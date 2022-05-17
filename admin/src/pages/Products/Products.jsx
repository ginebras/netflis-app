import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import './Products.css';

import { productRows } from '../../dummyData';

export default function Products() {
  const [data, setData] = useState(productRows);

  const handleDelete = (e) => {
    setData(data.filter((user) => user.id !== e));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img
              className="productListImg"
              src={params.row.img}
              alt="avatar-row"
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => {
        return (
          <div className="actionsContainer">
            <Link to={`/product-details/${params.row.id}`}>
              <button className="editBtn">Edit</button>
            </Link>
            <i
              class="bi bi-trash-fill table-icon"
              onClick={(e) => handleDelete(params.row.id)}
            ></i>
          </div>
        );
      },
    },
  ];

  return (
    <div className="products">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
