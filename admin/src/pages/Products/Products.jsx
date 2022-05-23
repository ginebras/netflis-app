import { useState,useContext,useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import './Products.css';

import { productRows } from '../../dummyData';
import MovieContext from '../../context/movies/movieContext';

export default function Products() {
  const [data, setData] = useState(productRows);
  const {movies,dispatch,getMovies,deleteMovie}=useContext(MovieContext);

  const handleDelete = (e) => {
    dispatch(deleteMovie(e));
  };

  useEffect(()=>{
    dispatch(getMovies());
  },[])

  const columns = [
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'movie',
      headerName: 'Movie',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img
              className="productListImg"
              src={params.row.imgTitle}
              alt="avatar-row"
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'year', headerName: 'Year', width: 120 },
    { field: 'limit', headerName: 'Limit', width: 120 },
    { field: 'isSeries', headerName: 'Is Series', width: 120 },
    {
      field: 'action',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => {
        return (
          <div className="actionsContainer">
            <Link to={`/movie-details/${params.row._id}`} state={{movie:params.row}}>
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
        rows={movies}
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
