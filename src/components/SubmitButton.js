import React from 'react'

const SubmitButton = ({ submit }) => {
    
    return (
        <button 
        type = 'submit' 
        className = {`${submit ? 'hide' : 'show' }`}
        >
            submit
        </button>
    )
}

export default SubmitButton