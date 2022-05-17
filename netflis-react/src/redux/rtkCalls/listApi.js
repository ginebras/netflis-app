import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const listApi=createApi({
	reducerPath:'listApi',
	baseQuery:fetchBaseQuery({ 
		baseUrl:'http://localhost:8000/api/v1/lists', 
		prepareHeaders:(headers,{ getState })=>{
			const token=getState().auth.token;

			if(token) headers.set('token',`${token}`);

			return headers;
		}
	}),
	endpoints:(builder)=>({
		random: builder.query({
			query:()=> `/`
		}),
	})
})

export const { useRandomQuery }=listApi;