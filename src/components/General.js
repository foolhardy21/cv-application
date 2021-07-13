import React from 'react'
import SubTitle from './SubTitle'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import EditButton from './EditButton'

const General = ( { handleSubmit, empty, person, handleChange, submit, editForm } ) => {
    
    return (
        <section>

        <SubTitle text = 'general information' />
        
        <form onSubmit = {handleSubmit} >
          <p> {empty ? 'fields are empty' : ''} </p>
          
          <InputField submit = {submit} property = {person.name} handleChange = {handleChange} 
            inputName = 'nameInput' inputType = 'text' placeholder = 'Name...'
          />
          <InputField submit = {submit} property = {person.email} handleChange = {handleChange} 
            inputName = 'emailInput' inputType = 'email' placeholder = 'Email...'
          />
          <InputField submit = {submit} property = {person.number} handleChange = {handleChange} 
            inputName = 'numberInput' inputType = 'number' placeholder = 'Phone...'
          />

        <SubmitButton submit={submit} />
        <EditButton editForm={editForm} submit={submit} />
        
      </form>

      </section>

    )
}

export default General