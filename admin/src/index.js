import ReactDOM from 'react-dom/client';

import App from './App';
import AuthState from './context/auth/authState';
import MovieState from './context/movies/movieState';
import ListsState from './context/lists/listState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AuthState>
		<MovieState>
			<ListsState>
				<App />
			</ListsState>
		</MovieState>
	</AuthState>
);
