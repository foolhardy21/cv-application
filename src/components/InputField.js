import React from 'react'

const InputField = ({ submit, property, handleChange, inputName, inputType, placeholder }) => {
    return (
        <div>
            <label htmlFor={inputName} 
            className={`${submit ? 'show' : 'hide'}`}>{property} </label>
            <input 
            type={inputType} 
            placeholder={placeholder} 
            onChange={handleChange} 
            value={property}
            name={inputName}
            className={`${submit ? 'hide' : 'show'}`}
            />
        </div>
        
    )
}
export default InputField