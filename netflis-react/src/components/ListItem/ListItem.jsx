import { useState } from 'react';
import { Link } from 'react-router-dom';

import './ListItem.scss';

import { useMovieQuery } from '../../redux/rtkCalls/movieApi';

export default function ListItem({index,list}){
	const [ hovered,setHovered ]=useState(false);
	const { data:movie }=useMovieQuery(list);

	return(
		<div className="listItem" 
			style={{left:hovered && index * 220}}
			onMouseEnter={()=>setHovered(true)}
			onMouseLeave={()=>setHovered(false)}
		>
			<Link to='/watch' state={{movie:movie}}>
				<img
			        src={movie?.imgTitle}
			        alt=""
			    />

			    {hovered && (
			    	<>
				    	<video src={movie?.trailer} autoPlay loop />
				    	<div className='info'>
					    	<div className='icons'>
					    		<i className="icon bi bi-play"></i>
					    		<i className="icon bi bi-plus"></i>
					    		<i className="icon bi bi-hand-thumbs-up"></i>
					    		<i className="icon bi bi-hand-thumbs-down"></i>
					    	</div>

					    	<div className='infoTop'>
						    	<span>{movie?.duration}</span>
						    	<span className='limit'>+{movie?.limit}</span>
						    	<span>{movie?.year}</span>
						    </div>

						    <div className='desc'>
						    	{movie?.desc}	     		
						    </div>

						    <div className='genre'>
						    	{movie?.genre}
						    </div>
					    </div>
					</>
			    )}
			</Link>
		</div>
	)
}