import React from 'react'
import Image from 'next/image'
import './gallery.css'

const Gallery = () => {
    return (
        <div className='gallery-container'>
            <div className='header'>
                <h1>Galería</h1>
                <p>Para más fotos sobre el Prenacional Deportivo Ensenada 2024, visita la siguiente galería</p>
                <a className="enlace" href="/">Galería de fotos</a>
            </div>
            
            <div className='img'>
                
            </div>
        </div>
    )
}

export default Gallery