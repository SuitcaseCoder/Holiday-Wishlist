import React from 'react'
import { useState } from 'react'

const Form = ({addItem}) => {

    const [ inputText, setInputText ] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.currentTarget.value);
    }

    const handleAddItem = (e) => {
        e.preventDefault();
        addItem(inputText);
        setInputText("");
    }

    return (
        <form onSubmit={handleAddItem}>
        <input 
            type="text" 
            value={inputText} 
            name="inputText" 
            id="inputText" 
            placeholder="what's on your wishlist ..." 
            onChange={handleInputChange} 
        />
            <button>add to wishlist</button>
        </form>
    )
}

export default Form;
