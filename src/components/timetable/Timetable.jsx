import React from 'react'
import Chess from '../icons/Chess'
import './timetable.css'

const Timetable = () => {
    return (
        <div className='time-container'>
            <div className='header'>
                <h1>Horarios</h1>
                <p>Encuentra aquí el rol de juegos de tu deporte en este <i>"X Evento Nacional Cultural y Deportivo Zona Norte Pacifíco"</i> .</p>
            </div>
            
            <div className='time-grid'>
                <div className='card'>
                    <Chess/>
                    <h2>Ajedrez</h2>
                </div>

                <div className='card'>
                    <h2>Atletismo Femenil</h2>
                </div>

                <div className='card'>
                    <h2>Atletismo Varonil</h2>
                </div>

                <div className='card'>
                    <h2>Voleibol</h2>
                </div>

                <div className='card'>
                    <h2>Beisbol</h2>
                </div>

                <div className='card'>
                    <h2>Basquetbol</h2>
                </div>

                <div className='card'>
                    <h2>Softbol</h2>
                </div>

                <div className='card'>
                    <h2>Futbol Soccer</h2>
                </div>
            </div>
        </div>
    )
}

export default Timetable