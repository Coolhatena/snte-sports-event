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
                <a href="/img/horarios/ROL DE JUEGOS PLANTILLA AJEDREZ.jpg" download="ROL DE JUEGOS AJEDREZ.jpg">
                    <div className='card'>
                        <Chess/>
                        <h2>Ajedrez</h2>
                    </div>
                </a>

                <a href="/img/horarios/ROL DE JUEGOS PLANTILLA ATLETISMO.jpg" download="ROL DE JUEGOS ATLETISMO.jpg">
                    <div className='card'>
                        <StopWatch/>
                        <h2>Atletismo Femenil</h2>
                    </div>
                </a>

                <a href="/img/horarios/ROL DE JUEGOS PLANTILLA ATLETISMO.jpg" download="ROL DE JUEGOS ATLETISMO.jpg">
                    <div className='card'>
                        <Run/>
                        <h2>Atletismo Varonil</h2>
                    </div>
                </a>

                <a href="/img/horarios/ROL DE JUEGOS PLANTILLA VOLEIBOL.jpg" download="ROL DE JUEGOS VOLEIBOL.jpg">
                    <div className='card'>
                        <Volleyball/>
                        <h2>Voleibol</h2>
                    </div>
                </a>

                <a href="/" download="ROL DE JUEGOS BEISBOL.jpg">
                    <div className='card'>
                        <Baseball/>
                        <h2>Béisbol</h2>
                    </div>
                </a>

                <a href="/img/horarios/ROL DE JUEGOS PLANTILLA BASQUETBOL.jpg" download="ROL DE JUEGOS BASQUETBOL.jpg">
                    <div className='card'>
                        <Basquet/>
                        <h2>Básquetbol</h2>
                    </div>
                </a>

                <a href="/" download="ROL DE JUEGOS PLANTILLA SOFTBOL.jpg">
                    <div className='card'>
                        <Soft/>
                        <h2>Softbol</h2>
                    </div>
                </a>

                <a href="/img/horarios/ROL DE JUEGOS PLANTILLA FUTBOL.jpg" download="ROL DE JUEGOS FUTBOL.jpg">
                    <div className='card'>
                        <Soccer/>
                        <h2>Fútbol Soccer</h2>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Timetable