import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';

import './app.scss';

import Home from './pages/Home/Home';
import Watch from './pages/Watch/Watch';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}  />
        <Route exact path='/watch/:id' element={<Watch/>}  />
        <Route exact path='/register' element={<Register/>}  />
        <Route exact path='/login' element={<Login/>}  />
      </Routes>
    </div>
  )
}

