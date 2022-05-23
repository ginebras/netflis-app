import { useState,useContext,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import './Lists.css';

import ListContext from '../../context/lists/listContext';

export default function Lists() {
  const {lists,dispatch,getLists,deleteList}=useContext(ListContext);

  const handleDelete = (e) => {
    dispatch(deleteList(e));
  };

  useEffect(()=>{
    dispatch(getLists());
  },[])

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
    },
    { field: 'genre', headerName: 'Genre', width: 200 },
    { field: 'type', headerName: 'Type', width: 120 },
    {
      field: 'action',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="actionsContainer">
            <Link to={`/list-details/${params.row._id}`} state={{list:params.row}}>
              <button className="editBtn">Edit</button>
            </Link>
            <i
              className="bi bi-trash-fill table-icon"
              onClick={(e) => handleDelete(params.row._id)}
            ></i>
          </div>
        );
      },
    },
  ];

  return (
    <div className="products">
      <DataGrid
        rows={lists}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={r=>r._id}
      />
    </div>
  );
}
