import { useState } from 'react';

import './ListItem.scss';

export default function ListItem({index}){
	const [ hovered,setHovered ]=useState(false);

  	const trailer="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
	return(
		<div className="listItem" 
			style={{left:hovered && index * 220}}
			onMouseEnter={()=>setHovered(true)}
			onMouseLeave={()=>setHovered(false)}
		>
			<img
		        src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
		        alt=""
		    />

		    {hovered && (
		    	<>
			    	<video src={trailer} autoPlay loop />
			    	<div className='info'>
				    	<div className='icons'>
				    		<i className="icon bi bi-play"></i>
				    		<i className="icon bi bi-plus"></i>
				    		<i className="icon bi bi-hand-thumbs-up"></i>
				    		<i className="icon bi bi-hand-thumbs-down"></i>
				    	</div>

				    	<div className='infoTop'>
					    	<span>1 hour  15 minutes</span>
					    	<span className='limit'>16+</span>
					    	<span>1996</span>
					    </div>

					    <div className='desc'>
					    	Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
					    	Donec a sem facilisis, tincidunt nisl ac, pretium tortor.		     		
					    </div>

					    <div className='genre'>
					    	Action
					    </div>
				    </div>
				</>
		    )}
		</div>
	)
}