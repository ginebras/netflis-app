import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { authAxios } from '../../config/axios';

const initialState={
	token:localStorage.getItem('token') || null,
	user:localStorage.getItem('user') || null,
};

export const createAcount=createAsyncThunk(
	'auth/createAccount',
	async (data)=>{
		let username=data.email.split('@')[0];
		let send={username,...data};

		try{
			let res=await authAxios.post('/register',send);
		}catch(error){
			console.log(error);
		}
	}
)

export const loginAcount=createAsyncThunk(
	'auth/loginAcount',
	async(data)=>{
		let res=await authAxios.post('/login',data);
		return res.data;
	}
)

const authSlice=createSlice({
	name:'auth',
	initialState:initialState,
	reducers:{},
	extraReducers:{
		[loginAcount.fulfilled]:(state,action)=>{
			const { user,token }=action.payload;
			localStorage.setItem('token',`Bearer ${token}`);
			localStorage.setItem('user',JSON.stringify(user));
			state.user=user;
			state.token=`Bearer ${token}`;
		}
	}
});

export default authSlice.reducer;