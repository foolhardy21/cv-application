import React, { useState } from "react";
import Title from './components/Title'
import General from './components/General'

const App = () => {
  const [person, setPerson] = useState({
    name: '',
    email: '',
    number: ''
  })
  const [submit,setSubmit] = useState(false)
  const [empty,setEmpty] = useState(false)
  
  const handleChange = (e) => {
    
    if(e.target.name == 'nameInput') {
      
      setPerson( {...person,name:e.target.value} )
  
    } else if(e.target.name == 'emailInput') {
      
      setPerson( {...person,email:e.target.value} )
  
    } else if(e.target.name == 'numberInput') {
      
      setPerson( {...person,number:e.target.value} )
    }
  }
  const checkEmptyInputs = () => {
    return ( !(person.name && person.number && person.email) ) ? true : false
  }
  const showErrorMessage = () => {
      setEmpty(true)
      setTimeout(() => {
        setEmpty(false)
      },2000)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if( checkEmptyInputs() ) {
      showErrorMessage()
    } else { 
      setSubmit(true)  
    }
  } 
  const editForm = (e) => {
    e.preventDefault()
    setSubmit(false)
  }

  return (
    <div className="App">
      <Title />
      <General 
      person={person}
      empty={empty}
      submit={submit}
      handleChange={handleChange}
      handleSubmit={handleSubmit} 
      editForm={editForm} />       
    </div>
  );
}

export default App;
