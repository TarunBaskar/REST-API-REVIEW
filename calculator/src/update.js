import React, { useState,useEffect } from 'react';
import './post.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TelevisionDetailsForm() {
  const [id, setId] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

 
  useEffect(()=>{
    axios
    .get("http://localhost:8080/Television")
    .then((response) => {
      console.log(response.data)
      setMyData(response.data)
  })
  .catch((error)=>setIsError(error.message));
  },[]);

  async function update(event) {
    const length = Object.keys(myData).length;
    event.preventDefault();
    let f=0;
    for(let i=0;i<length;i++){
      if(Number(id)===myData[i].id){
        f=1;
    try {
        await axios.put("http://localhost:8080/putTelevision",
            {

                id: id,
                brand:brand,
                model: model,
                size:size,
                price:price

            });
        alert("Successfully Update");
        setId();
        setBrand();
        setModel();
        setSize();
        setPrice();


    }
    catch (err) {
        alert("update Failed");
    }
}
}
if(f===0){
  alert('Television Details Does not exist');
}
}

  return (
    <form className="form" >
      <label className="label">
        Id : <br/>
        <input className="input" type="text" value={id} onChange={(event) => setId(event.target.value)} />
      </label>
      <label className="label">
        Brand Name : <br/>
        <input className="input" type="text" value={brand} onChange={(event) => setBrand(event.target.value)} />
      </label>
      
      <label className="label">
        Model Name : <br/>
        <input className="input" type="text" value={model} onChange={(event) => setModel(event.target.value)} />
      </label>
      <label className="label">
        Size :<br/>
        <input className="input" type="text" value={size} onChange={(event) => setSize(event.target.value)} />
      </label>
      <label className="label">
        Price :<br/>
        <input className="input" type="text" value={price} onChange={(event) => setPrice(event.target.value)} />
      </label>
      <button className="button" type="submit" onClick={update}>Update TelevisionDetails</button>
    </form>
  );
}



function TelevisionDetailUpdate() {
  const [televisions, setTelevision] = useState([]);

  function handleAddTelevision(television) {
    setTelevision([...televisions, television]);
  }

  return (
    <div className='all' >
    <br/>
    <div className="container" >
      <h1 className="title">TELEVISION DETAILS</h1>
      
      <TelevisionDetailsForm Form onAddTelevision={handleAddTelevision} />

    </div>
    <br/><br/>
    <center>
    <Link to='/'>
                <button type="submit" class="btn btn-primary" style={{padding
                :'5px' ,backgroundColor:'red'}}
                >Back</button>
            </Link></center>
    </div>
    
  );
}

export default TelevisionDetailUpdate;

// import { useState } from "react";
// import axios from "axios";

// function TelevisionDetailUpdate() {
//   const [data, setData] = useState({
//     id: "",
//     brand: "",
//     model: "",
//     size: "",
//     price: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .put("http://localhost:8080/Television" + data.id, data)
//       .then((response) => console.log(response))
//       .catch((error) => console.log(error));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="id"
//         value={data.id}
//         placeholder="ID"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="brand"
//         value={data.brand}
//         placeholder="Brand"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="model"
//         value={data.model}
//         placeholder="model"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="size"
//         value={data.size}
//         placeholder="Size"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="price"
//         value={data.price}
//         placeholder="Price"
//         onChange={handleChange}
//       />
//       <button type="submit">Update Data</button>
//     </form>
//   );
// }

// export default TelevisionDetailUpdate;

