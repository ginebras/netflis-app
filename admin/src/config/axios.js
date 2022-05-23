import axios from 'axios';

export const usersApi=axios.create({
	baseURL:'http://localhost:8000/api/v1/users'
})

export const authApi=axios.create({
	baseURL:'http://localhost:8000/api/v1/auth'
})

export const moviesApi=axios.create({
	baseURL:'http://localhost:8000/api/v1/movies'
})

export const listsApi=axios.create({
	baseURL:'http://localhost:8000/api/v1/lists'
})