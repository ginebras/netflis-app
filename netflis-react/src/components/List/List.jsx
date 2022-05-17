import { useRef,useState } from 'react'; 

import './List.scss';

import ListItem from '../ListItem/ListItem';

export default function List({data}){
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
			<h1 className='listTitle'>{data.title}</h1>
			<div className='wrapper'>
				<i className="arrow bi bi-arrow-left left" onClick={()=>handleClick('left')} style={{display:!moved && 'none'}} ></i>
				<div className='container' ref={ref}>
					{data.content.map((list,index)=>(
						<ListItem key={index} index={index} list={list} />
					))}
				</div>
				<i className="arrow bi bi-arrow-right right" onClick={()=>handleClick('right')} ></i>
			</div>
		</div>
	)
}