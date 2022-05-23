import { useReducer,useEffect } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';

import { authApi } from '../../config/axios';

const AuthState=(props)=>{
	const initialState={
		user:JSON.parse(localStorage.getItem('user')) || null,
		token:localStorage.getItem('token') || null,
	}

	const [state,dispatch]=useReducer(authReducer,initialState);

	useEffect(()=>{
		localStorage.setItem('user',JSON.stringify(state.user))
	},[state.user])

	const sendLogin=async(data)=>{
		try{
			let res=await authApi.post('/login',data);
			
			res.data.user.isAdmin && dispatch({
				type:'LOGIN_SUCCESS',
				payload:res.data
			})

		}catch(error){
			console.log(error);
		}
	}

	const verifyToken=async()=>{
		try{
			await authApi.get('/verify',{headers:{token:`Bearer ${localStorage.getItem('token')}`}});

		}catch(error){
			console.log(error);

			if(error.response.data==='token not valid'){
				dispatch({
					type:'TOKEN_NOT_VALID'
				})
			}
		}
	}

	return(
		<AuthContext.Provider
			value={{
				user:state.user,
				token:state.token,
				sendLogin,
				verifyToken,
				dispatch
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)

}

export default AuthState;