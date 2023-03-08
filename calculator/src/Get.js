import axios from 'axios'
import { useEffect } from 'react';
function Get() {
    useEffect(()=>{
    axios.get('http://localhost:8080/Television')
      .then((response)=>{
        console.log(response.data)
      });
    })
    return ( 
        <>
        <h1>
            Hello
        </h1>
        </>
     );
}

export default Get
