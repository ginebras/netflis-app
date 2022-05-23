import {useReducer} from 'react';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';

import { moviesApi } from '../../config/axios';

const MovieState=(props)=>{
	const initialState={
		movies:[],
	}

	const [state,dispatch]=useReducer(movieReducer,initialState);

	const getMovies=async()=>{
		try{
			let res=await moviesApi.get('/all',{headers:{token:`Bearer ${localStorage.getItem('token')}`}});
			dispatch({
				type:'MOVIES_SUCCESS',
				payload:res.data
			})
		}catch(error){
			console.log(error);
		}
	}

	const deleteMovie=async(id)=>{
		try{
			let res=await moviesApi.delete(`/delete/${id}`,{headers:{token:`Bearer ${localStorage.getItem('token')}`}});
			dispatch({
				type:'DELETE_SUCCESS',
				payload:id
			})

		}catch(error){
			console.log(error);
		}
	}

	const postMovie=async(data)=>{
		try{
			let res=await moviesApi.post('/create',data,{headers:{token:`Bearer ${localStorage.getItem('token')}`}});
			dispatch({
				type:'POSTED_MOVIE',
				payload:res.data
			})
		}catch(error){
			console.log(error);
		}
	}

	return(
		<MovieContext.Provider
			value={{
				movies:state.movies,
				getMovies,
				deleteMovie,
				postMovie,
				dispatch,
			}}
		>
			{props.children}
		</MovieContext.Provider>
	)
}

export default MovieState;