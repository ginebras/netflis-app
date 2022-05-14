import './Watch.scss';

export default function Watch(){
	return(
		<div className='watch'>
			<div className='back'>
				<i className="bi bi-arrow-left"></i>
				Home
			</div>

			<video 
				src="https://ak.picdn.net/shutterstock/videos/1025122397/preview/stock-footage-trendy-cute-girl-blogger-in-sunglasses-taking-selfie-photo-or-video-using-smartphone-attractive.webm"
				autoPlay
				progress
				controls
			/>
		</div>
	)
}