import './Home.scss';

import Navbar from '../../components/Navbar/Navbar';
import Featured from '../../components/Featured/Featured';
import List from '../../components/List/List';

export default function Home(){
	return (
		<div className="home">
			<Navbar/>
			<Featured type='series'/>
			<List/>
			<List/>
			<List/>
			<List/>
		</div>
	)
}