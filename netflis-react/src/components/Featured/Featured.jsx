import { useState,useEffect } from 'react';

import './Featured.scss';

import { useRandomQuery } from '../../redux/rtkCalls/movieApi';

export default function Featured({type}){
	const [ movie,setMovie]=useState(null);

	const { data }=useRandomQuery('movies');
	
	useEffect(()=>{
		data && setMovie(data[0]);
	},[data])

	return(
		<div className="featured">
			{ type && (
				<div className='category'>
					<span>{type==='movies' ? 'Movies' : 'Series'}</span>
					<select name='genre' id='genre'>
						<option>Genre</option>
			            <option value="adventure">Adventure</option>
			            <option value="comedy">Comedy</option>
			            <option value="crime">Crime</option>
			            <option value="fantasy">Fantasy</option>
			            <option value="historical">Historical</option>
			            <option value="horror">Horror</option>
			            <option value="romance">Romance</option>
			            <option value="sci-fi">Sci-fi</option>
			            <option value="thriller">Thriller</option>
			            <option value="western">Western</option>
			            <option value="animation">Animation</option>
			            <option value="drama">Drama</option>
			            <option value="documentary">Documentary</option>
					</select>
				</div>
			)}

			<img
		        src={movie?.imgTitle}
		        alt=""
		        className='img'
		     />

		     <div className='info'>
		     	<img  
		     		src={movie?.imgSm}
		     		alt=''
		     	/>

		     	<div className='desc'>
		     		{movie?.desc} 

		     		<div className="buttons">
		     			<button>
		     				<i className="bi bi-play-fill"></i> Play
		     			</button>

		     			<button>
		     				<i className="bi bi-info-circle"></i>Info
		     			</button>
		     		</div>
		     	</div>
		     </div>
		</div>
	)
}