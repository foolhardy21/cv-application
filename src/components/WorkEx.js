import React, { useState } from 'react'
import SubTitle from './SubTitle'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import EditButton from './EditButton'

const WorkEx = ({ company, companyTitle, domain, companyDuration, handleChange }) => {
    const [submit,setSubmit] = useState(false)
    const [empty,setEmpty] = useState(false)
  
  const checkEmptyInputs = () => {
    return ( !(company && companyTitle && domain && companyDuration) ) ? true : false
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

        <SubTitle text = 'work experience' />
        
        <form onSubmit = {handleSubmit} >
          
          <p> {empty ? 'fields are empty' : ''} </p>
          
          <InputField submit = {submit} property = {company} handleChange = {handleChange} 
            inputName = 'companyInput' inputType = 'text' placeholder = 'Company...'
          />
          <InputField submit = {submit} property = {companyTitle} handleChange = {handleChange} 
            inputName = 'companyTitleInput' inputType = 'text' placeholder = 'Title...'
          />
          <InputField submit = {submit} property = {domain} handleChange = {handleChange} 
            inputName = 'domainInput' inputType = 'text' placeholder = 'Domain...'
          />
          <InputField submit = {submit} property = {companyDuration} handleChange = {handleChange} 
            inputName = 'companyDurationInput' inputType = 'number' placeholder = 'No of years...'
          />

        <SubmitButton submit={submit} />
        <EditButton editForm={editForm} submit={submit} />
        
      </form>

      </section>
    )

}

export default WorkEx