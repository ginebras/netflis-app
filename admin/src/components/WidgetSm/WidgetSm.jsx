import { useState,useEffect,useContext } from 'react';

import './WidgetSm.css';

import { usersApi } from '../../config/axios';
import AuthContext from '../../context/auth/authContext';

export default function WidgetSm() {
  const [ newUsers,setUsers]=useState([]);
  const {dispatch}=useContext(AuthContext);

  useEffect(()=>{
    const getUsers=async()=>{
      try{
        const res=await usersApi.get('/users/all?news=true',{
          headers:{
            token:`Bearer ${localStorage.getItem('token')}`
          }
        });

        setUsers(res.data);
      }catch(error){
        if(error.response.data==='token not valid'){
          dispatch({
            type:'TOKEN_NOT_VALID',
          })
        }
      }
    }

    getUsers();

  },[])

  return (
    <div className="widgetSm">
      <h2 className="widgetSmTitle">New Join Members</h2>
      <ul className="usersList">
        {newUsers && (
          newUsers.map((user,index)=>(
            <li className="listItem" key={index}>
              <img
                src={user.profilePic || 'https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg'}
                alt="user-avatar"
                className="widgetUserImg"
              />

              <div className="widgetSmInfo">
                <span className="widgetUserUsername">{user.username}</span>
              </div>

              <button className="widgetSmButton">
                <i class="bi bi-eye-fill"></i>
                Display
              </button>
            </li>
          ))
        )}
        
      </ul>
    </div>
  );
}
