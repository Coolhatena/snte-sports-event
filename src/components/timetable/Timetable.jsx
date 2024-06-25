import React from 'react'
import Chess from '../icons/Chess'
import StopWatch from '../icons/StopWatch'
import Volleyball from '../icons/Volleyball'
import Baseball from '../icons/Baseball'
import Basquet from '../icons/Basquet'
import Soccer from '../icons/Soccer'
import Soft from '../icons/Soft'
import Run from '../icons/Run'
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
                    <StopWatch/>
                    <h2>Atletismo Femenil</h2>
                </div>

                <div className='card'>
                    <Run/>
                    <h2>Atletismo Varonil</h2>
                </div>

                <div className='card'>
                    <Volleyball/>
                    <h2>Voleibol</h2>
                </div>

                <div className='card'>
                    <Baseball/>
                    <h2>Béisbol</h2>
                </div>

                <div className='card'>
                    <Basquet/>
                    <h2>Básquetbol</h2>
                </div>

                <div className='card'>
                    <Soft/>
                    <h2>Softbol</h2>
                </div>

                <div className='card'>
                    <Soccer/>
                    <h2>Fútbol Soccer</h2>
                </div>
            </div>
        </div>
    )
}

export default Timetable