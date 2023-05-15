
import React,{useState,useEffect} from 'react'
import server from "../server";
// import from 'react-router-dom';

server();

const Dashboard = () => {
  const [reminder,setReminder]=useState([]);

  useEffect(()=>{
    fetch("api/movies").then(res=>res.json()).then(({movies})=>setReminder(movies))
  },[])

  let movies=reminder.map(({name})=><li>{name}</li>);
  
  return (
    <div>
      <ul>
        {movies}
      </ul>
    </div>
  )
}

export default Dashboard
