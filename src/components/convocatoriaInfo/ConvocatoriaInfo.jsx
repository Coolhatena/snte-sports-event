import React from 'react'
import Image from 'next/image';
import ItemList from '../items/ItemList';
import './page.css'

const ConvocatoriaInfo = () => {
    return (
      <div>
        <div className='container-img'>
            <div className='capa'></div>
            <Image
              src={'/img/n-img06.png'}
              alt="SNTE seccion 2"
              width={500}
              height={500}
            />
            <h1 >Convocatoria</h1>
            <p className='subtitulo-convocatoria'>“X Evento Nacional Cultural y Deportivo de la Sección 61 del SNTE”</p>
        </div>

        <div className='convocatoria-container'>
          <p>A los equipos representativos de las Delegaciones Sindicales de los Institutos Tecnológicos y Centros de: Mazatlán, Culiacán, Los Mochis, Huatabampo, Guaymas, Hermosillo, Valle del Yaqui, Nogales, Agua Prieta, Mexicali, Tijuana, Ensenada y La Paz B.C. a participar en el</p>
          <h3 className='titulo-evento'>“X Evento Nacional Cultural y Deportivo de la Sección 61 del SNTE Zona Norte Pacífico”</h3>
          <p className='zona'>Zona Norte Pacífico</p>
          

          <h4 className='subtitulo-bases'>B A S E S</h4>
          
          <div className="bases">
            <div className='card-item'><b>01.</b><br></br>El torneo tiene como propósito principal fomentar la competencia deportiva entre las delegaciones sindicales y los miembros que las componen, en un marco de unidad, respeto y convivencia fraternal.</div>
            
            <div className='card-item'><b>02.</b><br></br>El torneo tendrá como sede el Instituto Tecnológico de Ensenada, Baja California, durante los días 23 de junio al 28 de junio de 2024.</div>
            
            <div className='card-item'><b>03.</b><br></br>Los participantes serán: todas las Delegaciones Sindicales de la Zona Norte Pacífico que tengan una representación deportiva en las disciplinas convocadas.</div>
            
            <div className='card-item'><b>04.</b><br></br>Cada equipo podrá registrar un máximo de jugadores de acuerdo a los reglamentos de la disciplina correspondiente. Todos los jugadores deberán de presentarse a los partidos debidamente uniformados.</div>
            
            <div className='card-item'>
                <b>05.</b><br></br>Se competirá en:
                <li><b>AJEDREZ </b>en rama mixta y categoría única, se aceptarán 2 participantes por Tecnológico como máximo y se jugará el sistema Suizo.</li>
                <li><b>BASQUETBOL </b>rama femenil y varonil, se aceptarán mínimo 8 jugadores y 12 como máximo. Se jugará en 4 tiempos de 10 minutos cronometrados cada uno.</li>
                <li><b>BEISBOL y SOFTBOL </b>rama varonil, se aceptarán mínimo 12 jugadores y 20 como máximo. Se jugará a 7 entradas.</li>
                <li><b>FUTBOL SOCCER </b>rama varonil, se aceptarán mínimo 15 jugadores y 22 como máximo. Se jugará en 2 tiempos de 35 minutos cada uno.</li>
                <li><b>VOLIBOL </b>rama femenil y varonil, se aceptarán mínimo 8 jugadores y 12 comomáximo y se jugarán 2 sets de 25 tantos y uno de 15 tantos a ganar 2 de 3 sets.</li>
                <li><b>ATLETISMO </b>( pista y campo ) rama femenil y varonil, se llevarán a cabo en las cinco categorías siguientes:</li>
            </div>
            
            <div className='card-item'>
              <b>06.</b><br></br>La inscripción deberá realizarse antes del 15 de Junio enviando la siguiente documentación al correo: ensenada_pre2024@ite.edu.mx
              <li>Cédula de registro.</li>
                <li>Cédula de inscripción.</li>
                <li>Oficio enviado por el C. Secretario General de la Delegación representada y/o el Secretario de Cultura y Deporte de la Sección 61 a este Comité</li>
                <li>Por acuerdo de los Secretarios Generales Delegacionales se determinó que la
                    inscripción sea una cooperación de $100.00 pesos por cada participante en
                    cada disciplina que deberá ser entregada a la Sede el día del registro.</li>
            </div>
            
            <div className='card-item'><b>07.</b><br></br>Se confirmará la inscripción mediante la entrega formal de la documentación que acrediten a los jugadores, el día 23 de junio de 2024 de 14:00 a 16:00 horas en el Centro de información planta baja del I.T. de Ensenada, Baja California.</div>
            
            <div className='card-item'>
              <b>08.</b><br></br>Los jugadores serán acreditados mediante:
              <li>Comprobante de pago vigente correspondiente a la quincena 11 de 2024 (Original y copia).</li>
                <li>Credencial de elector o pasaporte o cédula profesional (Original y copia) (también se deberá presentar en cada juego de ser necesario).</li>
                <li>Cada participante podrá participar en una o dos disciplinas deportivas de conjunto.</li>
                <li>Estar registrado en la cédula de inscripción y cédula de registro.</li>
                <li>Credencial de participación elaborada (también se deberá presentar en cada juego).</li>
                <li>Quién no cumpla con algún requisito anterior no será registrado.</li>
            </div>
            
            <div className='card-item'><b>09.</b><br></br>El sistema de competencia será de acuerdo al Reglamento Deportivo de la Sección 61.</div>
            
            <div className='card-item'><b>10.</b><br></br>La junta previa se llevará a cabo el día 23 de junio de 2024 a las 16:00 horas en el
                “edificio 200 salones 201-206 planta baja” del Tecnológico de Ensenada, y tendrá
                como propósito el sorteo de los equipos, aclaraciones sobre el torneo y la forma de
                competencia. El equipo que no tenga presente un Delegado se sujetará a lo
                acordado.
            </div>
            
            <div className='card-item'><b>11.</b><br></br>Los equipos deberán estar presentes en la ceremonia de inauguración debidamente uniformados.</div>
            
            <div className='card-item'><b>12.</b><br></br>Se aplicará el Reglamento establecido por la Federación Mexicana de la disciplina
                respectiva y los árbitros serán acreditados por la Delegación Sede.
            </div>
            
            <div className='card-item'><b>13.</b><br></br>La Ceremonia de Inauguración dará inicio a las 09:00 horas del día 24 de Junio de
                2024 en Gimnasio de Usos Múltiples polígono sur del Tecnológico Ensenada.
            </div>
            
            <div className='card-item'><b>14.</b><br></br>Se entregará trofeo/medalla constancia a los tres primeros lugares de cada disciplina
                deportiva.
            </div>
            
            <div className='card-item'><b>15.</b><br></br>Los gastos derivados por el traslado y la estancia de los equipos para su participación
                en el torneo, estarán a cargo de los Comités Delegacionales representados por cada
                uno de los equipos.
            </div>
            
            <div className='card-item'><b>16.</b><br></br>Todo el desarrollo del torneo y las actividades colaterales, serán coordinadas por el
                Comité Organizador. Cada equipo, recibirá oportunamente la información
                correspondiente sobre las funciones del comité.
            </div>
            
            <div className='card-item'><b>17.</b><br></br>El Comité Organizador aplicará los términos del Reglamento de los Torneos
                Deportivos de la Sección 61.
            </div>
            
            <div className='card-item'><b>18.</b><br></br>Las protestas se harán inmediatamente después del partido celebrado y tendrán que
                ser asentadas en la cédula arbitral para su presentación a la Comisión de Honor y
                Justicia, la cual tendrá que analizar el caso y dar el dictamen correspondiente.
            </div>
            
            <div className='card-item'><b>19.</b><br></br>La Secretaria General de la Delegación D-V-04, el Secretario de Cultura y Deporte
                de la Sección 61, y los Secretarios de Cultura, Asuntos Profesionales y Formación
                Sindical Regionales de la Sección 61, integrarán la Comisión de Honor y Justicia que
                se constituye para dirimir las protestas de los equipos participantes en los torneos.</div>
            <div className='card-item'><b>20.</b><br></br>Lo no previsto en la presente convocatoria, será resuelto por el Comité Organizador.</div>
          </div>

        </div>
      </div>
      );
}

export default ConvocatoriaInfo