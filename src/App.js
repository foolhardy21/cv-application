import React, { useState } from "react";

const App = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [number,setNumber] = useState('')
  const [submit,setSubmit] = useState(false)
  const [edit,setEdit] = useState(true)
  
  const handleChange = (e) => {
    
    setSubmit(false)
    if(e.target.type == 'text') {
  
      setName(e.target.value)
  
    } else if(e.target.type == 'email') {
  
      setEmail(e.target.value)
  
    } else if(e.target.type == 'number') {
  
      setNumber(e.target.value)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(true)
    setEdit(false)
  } 
  const editForm = (e) => {
    e.preventDefault()
    setEdit(true)
    setSubmit(false)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit} >
        <input 
        type='text' 
        placeholder='Name' 
        onChange={handleChange} 
        value={name}
        className={`${edit ? 'show-input' : 'hide-input'}`}
        />
        <input 
        type='email' 
        placeholder='Email' 
        onChange={handleChange} 
        value={email}
        className={`${edit ? 'show-input' : 'hide-input'}`}
         />
        <input 
        type='number' 
        placeholder='PhoneNo' 
        onChange={handleChange} 
        value={number}
        className={`${edit ? 'show-input' : 'hide-input'}`}
         />
        <button type='submit'>submit</button>
        <button onClick={editForm}>edit</button>
      </form>

      <div className={`${submit ? 'show-form' : 'hide-form'}`}>
        <div>
          Name: {name}
        </div>
        <div>
          Email: {email}
        </div>
        <div>
          Phone: {number}
        </div>
      </div>
    </div>
  );
}

export default App;
