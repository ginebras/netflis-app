import { useRef,useState } from 'react'; 

import './List.scss';

import ListItem from '../ListItem/ListItem';

export default function List(){
	const ref=useRef();
	const [moved,setMoved]=useState(false);
	const [clicks,setClicks]=useState(0);

	const handleClick=(direction)=>{
		let distance=ref.current.getBoundingClientRect().x;
		setMoved(true);

		if(direction==='left' && clicks>0){
			setClicks(clicks-1);
			ref.current.style.transform=`translateX(${220 + distance}px)`;
		}
		if(direction==='right' && clicks<2){
			setClicks(clicks+1);
			ref.current.style.transform=`translateX(-${220 - distance}px)`;
		}
	}

	return(
		<div className='list'>
			<h1 className='listTitle'>Continue to watch</h1>
			<div className='wrapper'>
				<i className="arrow bi bi-arrow-left left" onClick={()=>handleClick('left')} style={{display:!moved && 'none'}} ></i>
				<div className='container' ref={ref}>
					<ListItem index={0}/>
					<ListItem index={1}/>
					<ListItem index={2}/>
					<ListItem index={3}/>
					<ListItem index={4}/>
					<ListItem index={5}/>
					<ListItem index={6}/>
				</div>
				<i className="arrow bi bi-arrow-right right" onClick={()=>handleClick('right')} ></i>
			</div>
		</div>
	)
}