import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import './Login.scss';

import { loginAcount } from '../../redux/reducers/authSlider';

export default function Login(){
	const dispatch=useDispatch();
	const navigate=useNavigate();
	const { register,handleSubmit,formState:{errors}}=useForm();

	const handleLogin=(data)=>{
		dispatch(loginAcount(data));

		setTimeout(()=>{
			navigate('/');
		},2000)
	}

	return(
		<div className='login'>
			<div className='top'>
				<div className='wrapper'>
					<img
		           	   className="logo"
			           src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
			           alt=""
			        />
				</div>
			</div>

			<div className='container'>
				<form onSubmit={handleSubmit(handleLogin)}>
					<h1>Sign In</h1>	

					<input type='text' placeholder='Email or phone number' {...register('email',{required:true})} />						
					<input type='password' placeholder='Password' {...register('password',{required:true})} />
					
					<button>Sign In</button>

					<span className='newSpan'>New to Netflis? <b>Sign up now.</b> </span>
					<span className='bottomSpan'> 
						This page is protected by Google reCAPTCHA to ensure you're noot a bot. <strong>Learn more.</strong>
					</span>
				</form>
			</div>
		</div>
	)
}