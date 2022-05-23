import { useEffect }from 'react';
import {useDispatch} from 'react-redux';

import './Home.scss';

import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';
import { useRandomQuery } from '../../redux/rtkCalls/listApi';
import { verifyToken } from '../../redux/reducers/authSlider';

export default function Home({type}){
	const {data}=useRandomQuery();
	const dispatch=useDispatch();

	useEffect(()=>{
		console.log('verifying')
		dispatch(verifyToken());
	},[])

	return (
		<div className="home">
			<Navbar/>
			<Featured type={type}/>
			{ data && (<>
				{data.map((list,index)=>(
					<List data={list} key={index} />
				))}
			</>)}
		</div>
	)
}