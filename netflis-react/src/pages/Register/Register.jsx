import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Register.scss';

import { createAcount } from '../../redux/reducers/authSlider';

export default function Register(){
	const dispatch=useDispatch();
	const navigate=useNavigate();
	const [ email,setEmail ]=useState("");
	const [ password,setPassword ]=useState('');
	const [ ready,setReady ]=useState(false);

	const handleStart=()=>{
		setReady(true);
	}

	const handleFinish=(e)=>{
		e.preventDefault();
		dispatch(createAcount({email,password}));

		setTimeout(()=>{
			navigate('/login');
		},1500)
	}

	return(
		<div className='register'>
			<div className='top'>
				<div className='wrapper'>
					<img
		           	   className="logo"
			           src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
			           alt=""
			        />

			        <button className='loginButton'>Sign in</button>
				</div>
			</div>

			<div className='container'>
				<h1>Unlimited movies, TV shows, and more.</h1>
		        <h2>Watch anywhere. Cancel anytime.</h2>
		        <p>
		          Ready to watch? Enter your email to create or restart your membership.
		        </p>

		        {!ready ? (
		        	<div className='form-group'>
			        	<input type='email' placeholder='Email address' value={email} onChange={(e)=>setEmail(e.target.value)} />
			        	<button className='registerButton'onClick={handleStart} >
			        		Get started
			        	</button>
			        </div>
		        ) : (
		        	<form className='form-group' onSubmit={(e)=>handleFinish(e)}>
			        	<input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
			        	<button className='registerButton' >
			        		Start
			        	</button>
			        </form>
		        )}
			</div>
		</div>
	)
}