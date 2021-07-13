import React from "react";

const EditButton = ({ editForm, submit }) => {
    return (
        <button 
        onClick = {editForm} 
        className = {`${ submit ? 'show' : 'hide' }`}
        >
            edit
        </button>
    )
}

export default EditButton