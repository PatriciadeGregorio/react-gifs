import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifts(category);
    
    return (
        <>
            <h3> {category} </h3>
            <div className="card-grid">
                {loading && <p>Cargando</p>}
                {
                    images.map((image) => (
                    <GifGridItem 
                        key={image.id}
                        {... image}
                    />
                    ))
                }
                
            
            </div>
        </>
    )
}

export default GifGrid
