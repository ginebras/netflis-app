import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { authAxios } from '../../config/axios';

const initialState={
	token:localStorage.getItem('token') || null,
	user:localStorage.getItem('user') || null,
	error:null
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

export const verifyToken=createAsyncThunk(
	'auth/verifytoken',
	async()=>{
		await authAxios.get('/verifyClient',{headers:{token:localStorage.getItem('token')}});
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
		},

		[verifyToken.rejected]:(state,action)=>{
			localStorage.removeItem('token');
			localStorage.removeItem('user');
			state.user=null;
			state.token=null;
		}
	}
});

export default authSlice.reducer;