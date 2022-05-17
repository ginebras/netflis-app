import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import './UsersList.css';

import { userRows } from '../../dummyData';

export default function UsersList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (e) => {
    setData(data.filter((user) => user.id !== e));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={params.row.avatar}
              alt="avatar-row"
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transactions Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => {
        return (
          <div className="actionsContainer">
            <Link to={`/user-details/${params.row.id}`}>
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
    <div className="users-list">
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
