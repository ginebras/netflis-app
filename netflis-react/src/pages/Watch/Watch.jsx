import { Link,useLocation } from 'react-router-dom';

import './Watch.scss';

export default function Watch(){
	const {movie}=useLocation().state;
	console.log(movie);

	return(
		<div className='watch'>
			<Link to='/'>
				<div className='back'>
					<i className="bi bi-arrow-left"></i>
					Home
				</div>
			</Link>

			<video 
				src="https://ak.picdn.net/shutterstock/videos/1025122397/preview/stock-footage-trendy-cute-girl-blogger-in-sunglasses-taking-selfie-photo-or-video-using-smartphone-attractive.webm"
				autoPlay
				progress
				controls
			/>
		</div>
	)
}