import './Home.scss';

import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';
import { useRandomQuery } from '../../redux/rtkCalls/listApi';

export default function Home({type}){
	const {data}=useRandomQuery();

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