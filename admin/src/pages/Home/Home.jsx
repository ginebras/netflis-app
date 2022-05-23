import { useState,useEffect,useContext } from 'react';

import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import Chart from '../../components/Chart/Chart';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import { usersApi } from '../../config/axios';
import AuthContext from '../../context/auth/authContext';

import './Home.css';

export default function Home() {
  const MONTHS=[
    ' Jan',
    'Feb',
    'Mar',
    "Apr",
    "May",
    'Jun',
    'Jul',
    'Agu',
    'Sep',
    'Oct',
    "Nov",
    "Dec"
  ]

  const [ usersStats,setStats]=useState([]);
  const {dispatch}=useContext(AuthContext);

  useEffect(()=>{
    const getStats=async ()=>{
      try{
          let res=await usersApi.get('/users/stats',{
            headers:{
              token:`Bearer ${localStorage.getItem('token')}`
            }
          });
          
          res.data.map((item)=>
            setStats((prev)=>[
              ...prev,
              {
                name:MONTHS[item._id-1],
                'New Users':item.total
              }
            ])
          )
      }catch(error){
        if(error.response.data==='token not valid'){
          dispatch({
            type:'TOKEN_NOT_VALID',
          })
        }
      }
    }

    getStats();

  },[])

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        grid
        dataKey="New Users"
        useData={usersStats}
        title="New Users"
      />

      <div className="widgetContainer">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
