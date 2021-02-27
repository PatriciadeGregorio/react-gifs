import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = (props) => {
    const initialCategories = ['Real Madrid'];
    const [categories, setCategories] = useState(initialCategories);

    // const handleAdd = () => {
    //     const newCategory = 'Miki Nuñez';
    //     setCategories([...categories, newCategory]);
    //     // setCategories((categories) => [...categories, newCategory]);
    //     /* Si usamos setCategories con callback, se recibe el valor del state que tenía hasta ahora y se devuelve el nuevo estado de la variable */
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            {/* <button onClick={handleAdd} >Agregar</button> */}
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid 
                        key = {category}
                        category = {category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
