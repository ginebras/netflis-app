import './Featured.scss';

export default function Featured({type}){
	return(
		<div className="featured">
			{ type && (
				<div className='category'>
					<span>{type==='movie' ? 'Movie' : 'Series'}</span>
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
		        src="https://images.unsplash.com/photo-1652207168165-5339236afbbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
		        alt=""
		        className='img'
		     />

		     <div className='info'>
		     	<img  
		     		src='https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1'
		     		alt=''
		     	/>

		     	<div className='desc'>
		     		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sem facilisis, tincidunt nisl ac, pretium tortor.
		     		Quisque vitae velit purus. Sed condimentum nibh sed nisl bibendum commodo. 

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