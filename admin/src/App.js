import { useContext } from 'react';
import { BrowserRouter,Route, Routes,Navigate } from 'react-router-dom';

import './style.css';

import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';
import UsersList from './pages/UsersList/UsersList';
import UserPage from './pages/UserPage/UserPage';
import NewUser from './pages/NewUser/NewUser';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import NewProduct from './pages/NewProduct/NewProduct';
import Login from './pages/Login/Login';
import Lists from './pages/Lists/Lists';
import List from './pages/List/List';
import NewList from './pages/NewList/NewList';

import AuthContext from './context/auth/authContext';

export default function App() {
  const {user}=useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={user ? <Navigate to='/' /> : <Login />} />
      </Routes>  
      {user && (
        <>
          <Topbar />
          <div className="container-app">
            <Sidebar />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/users" element={<UsersList />} />
                <Route exact path="/user-details/:id" element={<UserPage />} />
                <Route exact path="/newUser" element={<NewUser />} />
                <Route exact path="/movies" element={<Products />} />
                <Route exact path="/movie-details/:id" element={<Product />} />
                <Route exact path="/newProduct" element={<NewProduct />} />
                <Route exact path="/lists" element={<Lists />} />
                <Route exact path="/list-details/:id" element={<List />} />
                <Route exact path="/newList" element={<NewList />} />
              </Routes>
          </div>
        </>
      )}
    </BrowserRouter>
  );
}
