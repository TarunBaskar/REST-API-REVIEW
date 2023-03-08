import React, { useState,useEffect } from 'react';
import "./GetMap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Link } from 'react-router-dom';

function GetMap() {
  const [id, setId] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(()=>{
    axios
    .get("http://localhost:8080/Television")
    .then((response)=>{
        console.log(response.data)
        setId(response.data)
    })
    .catch((error)=> setIsError(error.message));
  },[]);
  return (
    <>
    <div className='all' >
        <br/><br/>
        <h1 style={{textAlign:'center',padding:'20px'}}>TELEVISION LIST</h1>
    <div className='container'>
  
                <div className='card'>
                    <table id='table'>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Size</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody >
        {id.slice(0,8).map((post)=>{
            return(
                        <tr key={(post.id)}>
                            <td>{post.id}</td>
                            <td>{post.brand}</td>
                            <td>{post.model}</td>
                            <td>{post.size}</td>
                            <td>{post.price}</td>
                        </tr>
                )
            })}
            </tbody>
        </table>
            </div>
    </div>
    {/* </form> */}
    
    {/* </div> */}
    {isError !== "" && <h2 style={{color:'red',textAlign:'center'}}>{isError}</h2>}<br/><br/>
    <center>
    <Link to='/'>
                <button type="submit" class="btn btn-primary" style={{padding
                :'5px',backgroundColor:'red'}}
                >Back</button>
            </Link></center>
   
    </div>
    </>
  );
}

export default GetMap;
