import { useReducer } from 'react';
import listReducer from './listReducer';
import ListContext from './listContext';

import { listsApi } from '../../config/axios';

export default function ListState(props){
	const initialState={
		lists:[]
	}

	const [state,dispatch]=useReducer(listReducer,initialState);

	const getLists=async()=>{
		try{
			let res=await listsApi.get('/all',{headers:{token:`Bearer ${localStorage.getItem('token')}`}});
			dispatch({
				type:'LISTS_SUCCESS',
				payload:res.data
			})

		}catch(error){
			console.log(error);
		}
	}

	const deleteList=async(id)=>{
		try{
			await listsApi.delete(`/delete/${id}`,{headers:{token:`Bearer ${localStorage.getItem('token')}`}});
			dispatch({
				type:'DELETE_SUCCESS',
				payload:id
			})
		}catch(error){
			console.log(error);
		}
	}

	const postList=async(data)=>{
		try{
			await listsApi.post(`/create`,data,{headers:{token:`Bearer ${localStorage.getItem('token')}`}});
		}catch(error){
			console.log(error);
		}
	}

	return(
		<ListContext.Provider
			value={{
				lists:state.lists,
				getLists,
				deleteList,
				postList,
				dispatch
			}}
		>
			{props.children}
		</ListContext.Provider>
	)
}