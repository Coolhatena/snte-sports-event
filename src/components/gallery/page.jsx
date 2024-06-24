import React from 'react'
import Image from 'next/image'
import './gallery.css'

const Gallery = () => {
    return (
        <div className='gallery-container'>
            <div className='header'>
                <h1>Galería</h1>
                <p>Para más fotos sobre el Prenacional Deportivo Ensenada 2024, visita la siguiente <a className="enlace" href="https://drive.google.com/drive/folders/1MuT_1r0soq5TwRuchRedCj0RsiqJtM-y">Galería de fotos</a></p>
            </div>
            
            <div className='img-container'>
                <img src='/img/img01.jpg'></img>
                
                <img src='/img/img02.jpg'></img>
                
                <img src='/img/img03.jpg'></img>
                
                <img src='/img/img04.jpg'></img>
                
                <img src='/img/img05.jpg'></img>
                
                <img src='/img/img06.jpg'></img>
            </div>
        </div>
    )
}

export default Gallery