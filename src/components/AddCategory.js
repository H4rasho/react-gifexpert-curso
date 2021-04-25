import React, { useState } from 'react'
import PropTypes from 'prop-types';
export const AddCategory = ( {setcategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        
    }
    const handleSubmit = (e) => {
        // evita el refresh de la pagina
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setcategories(categ => [inputValue , ...categ,]);
            setInputValue('');
        }
    }
    return (
            <form onSubmit = {handleSubmit}>
            <input
                type="text"
                value={inputValue}
                placeholder = "Ingrese una Categoria"
                onChange={handleInputChange}
            />
            </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
};
