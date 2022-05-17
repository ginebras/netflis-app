import { useEffect } from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './app.scss';

import Home from './pages/Home/Home';
import Watch from './pages/Watch/Watch';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

export default function App() {
  const user=useSelector((state)=>state.auth.user);

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={ user ? <Home/> : <Navigate to='/register' />}  />
        <Route exact path='/login' element={!user ? <Login/> : <Navigate to='/'/>  }  />
        <Route exact path='/register' element={!user ? <Register/> : <Navigate to='/'/>}  />

        { user && (
          <>
            <Route path='/series' element={<Home type='series'/>}  />
            <Route path='/movies' element={<Home type='movies'/>}  />
            <Route exact path='/watch' element={<Watch/>}  />
          </>
        )}
        
      </Routes>
    </div>
  )
}

