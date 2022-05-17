import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi=createApi({
	reducerPath:'movieApi',
	baseQuery:fetchBaseQuery({
		baseUrl:'http://localhost:8000/api/v1/movies',
		prepareHeaders:(headers,{getState})=>{
			const token=getState().auth.token;

			if(token) headers.set('token',token);

			return headers;
		}
	}),

	endpoints:(builder)=>({
		movie:builder.query({
			query:(id)=>`/find/${id}`
		}),
		random:builder.query({
			query:(type)=>`/random?type=${type}`
		})
	})
});

export const { useMovieQuery,useRandomQuery }=movieApi;