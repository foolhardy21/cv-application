import React, { useState } from "react";

const App = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [number,setNumber] = useState('')
  
  const handleChange = (e) => {
  
    if(e.target.type == 'text') {
  
      setName(e.target.value)
  
    } else if(e.target.type == 'email') {
  
      setEmail(e.target.value)
  
    } else if(e.target.type == 'number') {
  
      setNumber(e.target.value)
    }
  }
  return (
    <div className="App">
      <input type='text' placeholder='Name...' onChange={handleChange} value={name} />
      <input type='email' placeholder='Email...' onChange={handleChange} value={email} />
      <input type='number' placeholder='PhoneNo...' onChange={handleChange} value={number} />
      <p>{name}</p>
      <p>{email}</p>
      <p>{number}</p>
    </div>
  );
}

export default App;
