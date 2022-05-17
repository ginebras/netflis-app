import { configureStore } from '@reduxjs/toolkit';

import { listApi } from './rtkCalls/listApi';
import { movieApi } from './rtkCalls/movieApi';
import authReducer from './reducers/authSlider';

const store=configureStore({
	reducer:{
		auth:authReducer,
		[listApi.reducerPath]:listApi.reducer,
		[movieApi.reducerPath]:movieApi.reducer,
	},
	middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(listApi.middleware),
	
})

export default store;