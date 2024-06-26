import Image from 'next/image';
import ItemList from '../items/ItemList';
import './resultsInfo.css'
import { ResultDay } from '../resultDay/ResultDay';
import { ResultDiscipline } from '../resultDiscipline/ResultDiscipline';

export const ResultsInfo = () => {
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
			  <h1>Resultados:</h1>
			  <p className='subtitulo-results'>“X Evento Nacional Cultural y Deportivo de la Sección 61 del SNTE Zona Norte Pacífico”</p>
		  </div>
  
		  <div className='results-container'>

			<ResultDay title={"Resultados - dia 2"} >
				<ResultDiscipline title={"Disciplina Softbol"}>
					<h4>Mazatlán 35 - Hermosillo 3</h4>
					<h4>Nogales 15 - Tijuana 8</h4>
				</ResultDiscipline>
				<ResultDiscipline title={"Disciplina Futbol Soccer"}>
					<h4>Ensenada 1 - Mazatlán 1</h4>
					<h4>Culiacan 6 - Tijuana 0</h4>
					<h4>Mazatlán 7 - Huatabampo 1</h4>
					<h4>Tijuana 1 - La Paz 1</h4>
				</ResultDiscipline>
				<ResultDiscipline title={"Disciplina Voleibol Femenil"}>
					<h4>La Paz 2 - Hermosillo 0</h4>
					<h4>Culiacan 2 - Nogales 1</h4>
					<h4>Hermosillo 2 - Mexicali 1</h4>
					<h4>Culiacan 2 - Ensenada 0</h4>
				</ResultDiscipline>
				<ResultDiscipline title={"Disciplina Voleibol Varonil"}>
					<h4>Culiacan 2 - Mexicali 0</h4>
					<h4>Huatabampo 2 - La Paz 0</h4>
					<h4>Culicacan 2 - Nogales 1</h4>
					<h4>La Paz 2 - Ensenada 1</h4>
				</ResultDiscipline>
				<ResultDiscipline title={"Disciplina Basquetbol"}>
					<h4>Nogales 53 - Hermosillo 20</h4>
					<h4>La Paz 38 - Tijuana 30</h4>
				</ResultDiscipline>
			</ResultDay>

			<ResultDay title={"Resultados - dia 1"} >
				<ResultDiscipline title={"Disciplina Softbol"}>
					<h4>Mazatlán 13 - Nogales 3</h4>
					<h4>Guaymas 11 - Tijuana 0</h4>
				</ResultDiscipline>
				<ResultDiscipline title={"Disciplina Futbol Soccer"}>
					<h4>Ensenada 6 - Huatabampo 1</h4>
					<h4>Culiacan 2 - La Paz 0</h4>
				</ResultDiscipline>
				<ResultDiscipline title={"Disciplina Voleibol Femenil"}>
					<h4>Ensenada 2 - Nogales 0</h4>
					<h4>La Paz 2 - Mexicali 1</h4>
				</ResultDiscipline>
				<ResultDiscipline title={"Disciplina Basquetbol"}>
					<h4>La Paz 85 - Agua Prieta 19</h4>
					<h4>Nogales 44 - Mexicali 18</h4>
				</ResultDiscipline>
			</ResultDay>

		  </div>
		</div>
		);
}
