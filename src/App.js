import React, { useState } from "react";
import Title from './components/Title'
import General from './components/General'
import Education from "./components/Education";
import WorkEx from "./components/WorkEx";

const App = () => {
  const [person, setPerson] = useState({
    name: '',
    email: '',
    number: '',
    school: '',
    schoolTitle: '',
    schoolDuration: '',
    company: '',
    companyTitle: '',
    domain: '',
    companyDuration: ''
  })
  
  const handleChange = (e) => {
    
    if(e.target.name == 'nameInput') {
      
      setPerson( {...person,name:e.target.value} )
  
    } else if(e.target.name == 'emailInput') {
      
      setPerson( {...person,email:e.target.value} )
  
    } else if(e.target.name == 'numberInput') {
      
      setPerson( {...person,number:e.target.value} )
    
    } else if(e.target.name == 'schoolInput') {
      
      setPerson( {...person,school:e.target.value} )
    
    } else if(e.target.name == 'schoolTitleInput') {
      
      setPerson( {...person,schoolTitle:e.target.value} )
    
    } else if(e.target.name == 'schoolDurationInput') {
      
      setPerson( {...person,schoolDuration:e.target.value} )
    
    } else if(e.target.name == 'companyInput') {
      
      setPerson( {...person,company:e.target.value} )
    
    } else if(e.target.name == 'companyTitleInput') {
      
      setPerson( {...person,companyTitle:e.target.value} )
    
    } else if(e.target.name == 'domainInput') {
      
      setPerson( {...person,domain:e.target.value} )
    
    } else if(e.target.name == 'companyDurationInput') {
      
      setPerson( {...person,companyDuration:e.target.value} )
    
    }
    
  }
  const checkEmptyInputs = (...args) => {
    for(let i = 0; i < args.length; i++) {
      if(!args[i]) {
        return true
      }
    }
    return false
  }
  

  return (
    <div className="App">
      <Title />
      <General {...person} handleChange={handleChange} checkEmptyInputs={checkEmptyInputs} />
      <Education {...person} handleChange={handleChange} checkEmptyInputs={checkEmptyInputs} /> 
      < WorkEx {...person} handleChange={handleChange} checkEmptyInputs={checkEmptyInputs} /> 
    </div>
  );
}

export default App;
