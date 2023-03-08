import React, { useState } from 'react';
import './post.css';
import axios from 'axios';

function TelevisionDetailsForm() {
  const [id, setId] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');

  async function save(event) {
    event.preventDefault();
    try {
        await axios.post("http://localhost:8080/postTelevision",
            {

                id: id,
                brand:brand,
                model: model,
                size:size,
                price:price

            });
        alert(" Registation Successfully");
        setId("");
        setBrand("");
        setModel("");
        setSize("");
        setPrice("");


    }
    catch (err) {
        alert(" Registation Failed");
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
      <button className="button" type="submit" onClick={save}>Add Television</button>
    </form>
  );
}

function TelevisionDetailManagement() {
  const [televisions, setTelevision] = useState([]);

  function handleAddTelevision(television) {
    setTelevision([...televisions, television]);
  }

  return (
    <div className='all' style={{paddingBottom:'110px'}}>
    <br/>
    <div className="container">
      <h1 className="title">TELEVISION DETAILS</h1>
      <TelevisionDetailsForm Form onAddTelevision={handleAddTelevision} />
    </div><br/><br/><br/>
    </div>
  );
}

export default TelevisionDetailManagement;


     