import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import './Login.css';

import AuthContext from '../../context/auth/authContext';

export default function Login(){
	const { register,handleSubmit,formState:{errors}}=useForm();
	const { dispatch,sendLogin }=useContext(AuthContext);

	const handleLogin=(data)=>{
		dispatch(sendLogin(data));
	}

	return(
		<div className='login'>
			<form onSubmit={handleSubmit(handleLogin)} className='loginForm'>
				<input className='loginInput' placeholder='email' type='text' {...register('email',{required:true})} />
				<input className='loginInput' placeholder='password' type='password' {...register('password',{required:true})} />

				<button type='submit' className='submitButton'>Login</button>
			</form>
		</div>
	)
}