import React from 'react'

const General = ( { handleSubmit, empty, person, handleChange, submit, editForm } ) => {
    
    return (
        <section>
        <h3>general information</h3>
        
        <form onSubmit={handleSubmit} >
          <p> {empty ? 'fields are empty' : ''} </p>
        <label htmlFor='nameInput' 
        className={`${submit ? 'show' : 'hide'}`}>{person.name} </label>
        <input 
        type='text' 
        placeholder='Name' 
        onChange={handleChange} 
        value={person.name}
        name='nameInput'
        className={`${submit ? 'hide' : 'show'}`}
        />
        <label htmlFor='emailInput'
        className={`${submit ? 'show' : 'hide'}`}>{person.email} </label>
        <input 
        type='email' 
        placeholder='Email' 
        onChange={handleChange} 
        value={person.email}
        name='emailInput'
        className={`${submit ? 'hide' : 'show'}`}
         />
         <label htmlFor='numberInput'
         className={`${submit ? 'show' : 'hide'}`}>{person.number} </label>
        <input 
        type='number' 
        placeholder='PhoneNo' 
        onChange={handleChange} 
        value={person.number}
        name='numberInput'
        className={`${submit ? 'hide' : 'show'}`}
         />
        <button type='submit' className={`${submit ? 'hide' : 'show' }`}>submit</button>
        <button onClick={editForm} className={`${ submit ? 'show' : 'hide' }`}>edit</button>
      </form>

      </section>

    )
}

export default General