import React from 'react'
import Image from 'next/image'
import './info.css'

const Information = () => {
  return (
    <div className='info-container'>
        <div className='grid-info'>
            <div className='item-info'>
                <h1>X Evento Nacional Cultural y Deportivo Zona Norte Pacifico</h1>
                <p>23 al 28 de junio - Ensenada, Baja California</p>

                <div className='info'>
                    <p>El Prenacional Deportivo Ensenada 2024 es un evento que reunirá a los mejores deportistas de la región
                         Zona Norte Pacífico para competir en una variedad de disciplinas. El torneo tiene como propósito 
                         principal fomentar la competencia deportiva entre las delegaciones sindicales y los miembros que 
                         las componen, en un marco de unidad, respeto y convivencia fraternal.</p> 

					<p className='info extra'>Fecha limite para el preregistro: 15 de junio</p>
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