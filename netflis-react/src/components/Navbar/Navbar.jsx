import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

export default function Navbar(){
	const [scrolled,setScrolled]=useState(false);

	useEffect(()=>{
		window.onscroll=()=>{
			setScrolled(window.pageYOffset!==0);
		}
	},[])

	return(
		<nav className={`nav ${scrolled && 'scrolled'}`}>
			<div className='nav-container'>
				<div className='nav-left'>
					<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158' alt='netflis-logo' />

					<span>Homepage</span>
					<span>
						<Link to='/series'>
							Series
						</Link>
					</span>
					<span>
						<Link to='/movies'>
							Movies
						</Link>
					</span>
					<span>New and Popular</span>
					<span>My List</span>
				</div>
				<div className='nav-right'>
					<i className="bi bi-search"></i>
					<span>KID</span>
					<i className="bi bi-bell-fill"></i>
					<img src='https://images.unsplash.com/photo-1589698314382-629520d350cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXNpYW4lMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt='profile'/>
					
					<div className='profile'>
						<i className="bi bi-caret-down-fill"></i>
						<div className='options'>
							<span>Settings</span>
							<span>About</span>
						</div>
					</div>


				</div>
			</div>
		</nav>
	)
}