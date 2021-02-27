import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const onChangeValue = (e) => {
        const newInputValue = e.target.value;
        setInputValue(newInputValue);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input
            type="text"
            value={inputValue}
            onChange={onChangeValue}>
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory
