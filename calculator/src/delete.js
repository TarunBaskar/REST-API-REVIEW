import React, { useState,useEffect } from 'react';
import "./GetMap.css";
// import GetMap from './GetMap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function DeleteMap() {
  const [id, setId] = useState('');
  const[error,setError] = useState('');
    const [myData, setMyData] = useState([]);
  // const [isError, setIsError] = useState("");     

  useEffect(()=>{
    axios
    .get("http://localhost:8080/Television")
    .then((response) => {
      console.log(response.data)
      setMyData(response.data)
  })
  },[]);
  function del() {
    const length = Object.keys(myData).length;
    let f=0;
    for(let i=0;i<length;i++){
      
    if(Number(id)===myData[i].id){
      f=1
    axios
        .delete('http://localhost:8080/Television?id=' + id)
        .then((response) => {
            console.log(response.data);
            // alert("data Deleted");
        })
        .catch((error) => setError(error.message))
        alert('DATA DELETED');       
}
  }
  if(f===0){
    alert("Televison Details Does not exist");
  }
}

  return (
    <div className='all' >
    <br/><br/>
        <h1 style={{textAlign:'center'}}>TELEVISION LIST</h1><br/> 
    <div className='container'>
    <form className='input'>
      <label htmlFor="id-input"><b>Enter your ID:</b></label><br/>
      <input id="id1" type="number" onChange={(e)=>setId(e.target.value)} /><br/><br/>
      <button className='button' type='submit' onClick={del} >SUBMIT</button><br/><br/>

      {/* <p>Id {id} is Deleted</p> */}
      <p> {error}</p>
    </form>
    </div><br/><br/>
    <center>
    <Link to='/'>
                <button type="submit" class="btn btn-primary" style={{padding
                :'5px' , backgroundColor:'red'}}
                >Back</button>
            </Link></center>
    </div>
  );
}

export default DeleteMap;
