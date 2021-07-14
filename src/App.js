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
    
    switch(e.target.name) {
      case 'nameInput': setPerson( {...person,name:e.target.value} )
                        break
      case 'emailInput': setPerson( {...person,email:e.target.value} )
                        break
      case 'numberInput': setPerson( {...person,number:e.target.value} )
                        break
      case 'schoolInput': setPerson( {...person,school:e.target.value} )
                        break
      case 'schoolTitleInput': setPerson( {...person,schoolTitle:e.target.value} )
                        break
      case 'schoolDurationInput': setPerson( {...person,schoolDuration:e.target.value} )
                        break
      case 'companyInput': setPerson( {...person,company:e.target.value} )
                        break
      case 'companyTitleInput': setPerson( {...person,companyTitle:e.target.value} )
                        break
      case 'domainInput': setPerson( {...person,domain:e.target.value} )
                        break
      case 'companyDurationInput': setPerson( {...person,companyDuration:e.target.value} )
                        break
       
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
