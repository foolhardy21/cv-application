import React, { useState } from 'react'
import SubTitle from './SubTitle'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import EditButton from './EditButton'

const Education = ({ school, schoolTitle, schoolDuration, handleChange  }) => {
    const [submit,setSubmit] = useState(false)
    const [empty,setEmpty] = useState(false)
  
  const checkEmptyInputs = () => {
    return ( !(school && schoolTitle && schoolDuration) ) ? true : false
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
        <section>

        <SubTitle text = 'education information' />
        
        <form onSubmit = {handleSubmit} >
          
          <p> {empty ? 'fields are empty' : ''} </p>
          
          <InputField submit = {submit} property = {school} handleChange = {handleChange} 
            inputName = 'schoolInput' inputType = 'text' placeholder = 'Schoolname...'
          />
          <InputField submit = {submit} property = {schoolTitle} handleChange = {handleChange} 
            inputName = 'schoolTitleInput' inputType = 'text' placeholder = 'Schooltitle...'
          />
          <InputField submit = {submit} property = {schoolDuration} handleChange = {handleChange} 
            inputName = 'schoolDurationInput' inputType = 'number' placeholder = 'No of Years...'
          />

        <SubmitButton submit={submit} />
        <EditButton editForm={editForm} submit={submit} />
        
      </form>

      </section>

    )
}

export default Education