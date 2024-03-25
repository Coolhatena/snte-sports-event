import React from 'react'
import Image from 'next/image'
import './info.css'

const Information = () => {
  return (
    <div className='contact-container'>
        <div className='grid-info'>
            <div className='item-info'>
                <h1>IX Evento Nacional Cultural y Deportivo Zona Norte Pacifico</h1>
                <p>10 al 14 de julio - Ensenada, Baja California</p>

                <div className='info'>
                    <p>El Prenacional Deportivo Ensenada 2024 es un evento que reunirá a los mejores deportistas de todo el país para competir en una variedad de disciplinas. Su objetivo es promover el deporte entre los jóvenes y fomentar la convivencia social. Este evento también servirá como clasificatorio para los Juegos Nacionales CONADE 2023.</p> 
                </div>
                
            </div>

            <div className='item-img'>
                <Image src={'/img/logo_evento.jpeg'} width={280} height={280} alt='Logo'/>
            </div>
        </div>
    </div>
  )
}

export default Information