import React, { useState } from 'react'
import SubTitle from './SubTitle'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import EditButton from './EditButton'

const General = ( {  name, email, number, handleChange, checkEmptyInputs } ) => {
  const [submit,setSubmit] = useState(false)
  const [empty,setEmpty] = useState(false)
  
  
  const showErrorMessage = () => {
      setEmpty(true)
      setTimeout(() => {
        setEmpty(false)
      },2000)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if( checkEmptyInputs(name, email, number) ) {
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

        <SubTitle text = 'general information' />
        
        <form onSubmit = {handleSubmit} >
          
          <p> {empty ? 'fields are empty' : ''} </p>
          
          <InputField submit = {submit} property = {name} handleChange = {handleChange} 
            inputName = 'nameInput' inputType = 'text' placeholder = 'Name...'
          />
          <InputField submit = {submit} property = {email} handleChange = {handleChange} 
            inputName = 'emailInput' inputType = 'email' placeholder = 'Email...'
          />
          <InputField submit = {submit} property = {number} handleChange = {handleChange} 
            inputName = 'numberInput' inputType = 'number' placeholder = 'Phone...'
          />

        <SubmitButton submit={submit} />
        <EditButton editForm={editForm} submit={submit} />
        
      </form>

      </section>

    )
}

export default General