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
                <img src='/img/dia1/img1.jpg'></img>
                
                <img src='/img/dia1/img2.jpg'></img>
                
                <img src='/img/dia1/img3.jpg'></img>
                
                <img src='/img/dia1/img4.jpg'></img>
                
                <img src='/img/dia1/img5.jpg'></img>
                
                <img src='/img/dia1/img6.jpg'></img>
            </div>
        </div>
    )
}

export default Gallery