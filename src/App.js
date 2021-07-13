import React, { useState } from "react";
import Title from './components/Title'
import General from './components/General'
import Education from "./components/Education";

const App = () => {
  const [person, setPerson] = useState({
    name: '',
    email: '',
    number: '',
    school: '',
    schoolTitle: '',
    schoolDuration: ''
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
    
    }
    
  }
  

  return (
    <div className="App">
      <Title />
      <General {...person} handleChange={handleChange} />
      <Education {...person} handleChange={handleChange} />  
    </div>
  );
}

export default App;
