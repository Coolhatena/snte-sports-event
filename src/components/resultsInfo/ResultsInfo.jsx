'use client'
import { useState } from 'react';
import Image from 'next/image';
import ItemList from '../items/ItemList';
import './resultsInfo.css'
import { DaysMenu } from '../daysMenu/DaysMenu';
import { ResultDay } from '../resultDay/ResultDay';
import { TableChess } from '../tableChess/TableChess';
import { ResultTable } from '../resultTable/ResultTable';
import { ResultDiscipline } from '../resultDiscipline/ResultDiscipline';
import { logos } from '@/helpers/logos';
import { TableChessRow } from '../tableChess/tableChessRow/TableChessRow';

export const ResultsInfo = () => {
	const [selectedDay, setSelectedDay] = useState('day1');

	const handleDayChange = (day) => {
		setSelectedDay(day);
	};


	return (
		<div>
		  <DaysMenu onDayChange={handleDayChange} />
  
		  	<div className='results-container'>
				{selectedDay === 'day1' && (
					<ResultDay title={"Resultados - día 1"}>
						<ResultDiscipline title={"Disciplina Softbol"}>
							<ResultTable logo1={logos.mazatlan} team1={"Mazatlán"} score1={"13"} team2={"Nogales"} score2={"3"} logo2={logos.nogales} />

							<ResultTable logo1={logos.guaymas} team1={"Guaymas"} score1={"11"} team2={"Tijuana"} score2={"0"} logo2={logos.tijuana} />
						</ResultDiscipline>

						<ResultDiscipline title={"Disciplina Fútbol Soccer"}>
							<ResultTable logo1={logos.ensenada} team1={"Ensenada"} score1={"6"} team2={"Huatabampo"} score2={"1"} logo2={logos.huatabampo} />

							<ResultTable logo1={logos.culiacan} team1={"Culiacán"} score1={"2"} team2={"La Paz"} score2={"0"} logo2={logos.laPaz} />
						</ResultDiscipline>

						<ResultDiscipline title={"Disciplina Voleibol Femenil"}>
							<ResultTable logo1={logos.ensenada} team1={"Ensenada"} score1={"2"} team2={"Nogales"} score2={"0"} logo2={logos.nogales} />

							<ResultTable logo1={logos.laPaz} team1={"La Paz"} score1={"2"} team2={"Mexicali"} score2={"1"} logo2={logos.mexicali} />
						</ResultDiscipline>

						<ResultDiscipline title={"Disciplina Básquetbol"}>
							<ResultTable logo1={logos.laPaz} team1={"La Paz"} score1={"85"} team2={"Agua Prieta"} score2={"19"} logo2={logos.aguaPrieta} />

							<ResultTable logo1={logos.nogales} team1={"Nogales"} score1={"44"} team2={"Mexicali"} score2={"18"} logo2={logos.mexicali} />
						</ResultDiscipline>

						<ResultDiscipline title={"Disciplina Ajedrez"}>
							<TableChess>
								<TableChessRow 
									tablero={"1"}
									delegacion1={"Ensenada"} 
									jBlancas={"Jose Jesus Cosio De La Rocha"}
									puntos1={"1"}
									delegacion2={"Culiacan"}
									jNegras={"Ernesto Alonso Contreras Salazar"}
									puntos2={"0"}
								/>
							</TableChess>
						</ResultDiscipline>
					</ResultDay>
				)}

				{selectedDay === 'day2' && (

					<ResultDay title={"Resultados - día 2"} >
						<ResultDiscipline title={"Disciplina Softbol"}>
							<ResultTable logo1={logos.mazatlan} team1={"Mazatlán"} score1={"35"} team2={"Hermosillo"} score2={"3"} logo2={logos.hermosillo} />

							<ResultTable logo1={logos.nogales} team1={"Nogales"} score1={"15"} team2={"Tijuana"} score2={"8"} logo2={logos.tijuana} />
						</ResultDiscipline>

						<ResultDiscipline title={"Disciplina Fútbol Soccer"}>
							<ResultTable logo1={logos.ensenada} team1={"Ensenada"} score1={"1"} team2={"Mazatlán"} score2={"1"} logo2={logos.mazatlan} />

							<ResultTable logo1={logos.culiacan} team1={"Culiacán"} score1={"6"} team2={"Tijuana"} score2={"0"} logo2={logos.tijuana} />
							
							<ResultTable logo1={logos.mazatlan} team1={"Mazatlán"} score1={"7"} team2={"Huatabampo"} score2={"1"} logo2={logos.huatabampo} />

							<ResultTable logo1={logos.tijuana} team1={"Tijuana"} score1={"1"} team2={"La Paz"} score2={"1"} logo2={logos.laPaz} />
						</ResultDiscipline>

						<ResultDiscipline title={"Disciplina Voleibol Femenil"}>
							<ResultTable logo1={logos.laPaz} team1={"La Paz"} score1={"2"} team2={"Hermosillo"} score2={"0"} logo2={logos.hermosillo} />

							<ResultTable logo1={logos.culiacan} team1={"Culiacán"} score1={"2"} team2={"Nogales"} score2={"1"} logo2={logos.nogales} />

							<ResultTable logo1={logos.hermosillo} team1={"Hermosillo"} score1={"2"} team2={"Mexicali"} score2={"1"} logo2={logos.mexicali} />

							<ResultTable logo1={logos.culiacan} team1={"Culiacán"} score1={"2"} team2={"Ensenada"} score2={"0"} logo2={logos.ensenada} />
						</ResultDiscipline>

						<ResultDiscipline title={"Disciplina Voleibol Varonil"}>
							<ResultTable logo1={logos.culiacan} team1={"Culiacán"} score1={"2"} team2={"Mexicali"} score2={"0"} logo2={logos.mexicali} />

							<ResultTable logo1={logos.huatabampo} team1={"Huatabampo"} score1={"2"} team2={"La Paz"} score2={"0"} logo2={logos.laPaz} />

							<ResultTable logo1={logos.culiacan} team1={"Culiacán"} score1={"2"} team2={"Nogales"} score2={"1"} logo2={logos.nogales} />

							<ResultTable logo1={logos.laPaz} team1={"La Paz"} score1={"2"} team2={"Ensenada"} score2={"1"} logo2={logos.ensenada} />
						</ResultDiscipline>

						<ResultDiscipline title={"Disciplina Básquetbol"}>
							<ResultTable logo1={logos.nogales} team1={"Nogales"} score1={"53"} team2={"Hermosillo"} score2={"20"} logo2={logos.hermosillo} />

							<ResultTable logo1={logos.laPaz} team1={"La Paz"} score1={"38"} team2={"Tijuana"} score2={"30"} logo2={logos.tijuana} />
						</ResultDiscipline>
						<ResultDiscipline title={"Disciplina Ajedrez"}>
							<TableChess>
								<TableChessRow 
									tablero={"1"}
									delegacion1={"Ensenada"} 
									jBlancas={"Jose Jesus Cosio De La Rocha"}
									puntos1={"2.5"}
									delegacion2={"Tijuana"}
									jNegras={"Juan Jose Gomez Quezada"}
									puntos2={"3"}
								/>

								<TableChessRow 
									tablero={"2"}
									delegacion1={"Mexicali"} 
									jBlancas={"Fernando Javier Haro Navarro"}
									puntos1={"2"}
									delegacion2={"Ensenada"}
									jNegras={"Eddie Helbert Clemente Torres"}
									puntos2={"2.5"}
								/>

								<TableChessRow 
									tablero={"3"}
									delegacion1={"Culiacan"} 
									jBlancas={"Ernesto Alonso Contreras Salazar"}
									puntos1={"1.5"}
									delegacion2={"Nogales"}
									jNegras={"Nelva Angelica Romero Rodriguez"}
									puntos2={"1"}
								/>

								<TableChessRow 
									tablero={"4"}
									delegacion1={"Nogales"} 
									jBlancas={"Francisco Gastelum Monarres"}
									puntos1={"0"}
									delegacion2={"Hermosillo"}
									jNegras={"Jose De Jesus Netzahualcoyotl Soots"}
									puntos2={"0.5"}
								/>
								
							</TableChess>
						</ResultDiscipline>
					</ResultDay>
				)}

				{selectedDay === 'day3' && (

					<ResultDay title={"Resultados - día 3"} >
						<ResultDiscipline title={"Disciplina Softbol"}>
							<ResultTable logo1={logos.mazatlan} team1={"Mazatlán"} score1={"12"} team2={"Guaymas"} score2={"6"} logo2={logos.guaymas} />

							<ResultTable logo1={logos.nogales} team1={"Nogales"} score1={"10"} team2={"Hermosillo"} score2={"9"} logo2={logos.hermosillo} />
						</ResultDiscipline>

						<ResultDiscipline title={"Disciplina Fútbol Soccer"}>
							<h4>SEMIFINALES</h4>
							<ResultTable logo1={logos.mazatlan} team1={"Mazatlán"} score1={"2"} team2={"La Paz"} score2={"1"} logo2={logos.laPaz} />

							<ResultTable logo1={logos.culiacan} team1={"Culiacán"} score1={"4"} team2={"Ensenada"} score2={"0"} logo2={logos.ensenada} />
						</ResultDiscipline>

						<ResultDiscipline title={"Disciplina Voleibol Femenil"}>
							<h4>SEMIFINALES</h4>
							<ResultTable logo1={logos.laPaz} team1={"La Paz"} score1={"2"} team2={"Ensenada"} score2={"1"} logo2={logos.ensenada} />

							<ResultTable logo1={logos.culiacan} team1={"Culiacán"} score1={"2"} team2={"Hermosillo"} score2={"0"} logo2={logos.hermosillo} />
						</ResultDiscipline>

						<ResultDiscipline title={"Disciplina Voleibol Varonil"}>
							<h4>SEMIFINALES</h4>
							<ResultTable logo1={logos.culiacan} team1={"Culiacán"} score1={"2"} team2={"Ensenada"} score2={"1"} logo2={logos.ensenada} />

							<ResultTable logo1={logos.huatabampo} team1={"Huatabampo"} score1={"2"} team2={"Nogales"} score2={"0"} logo2={logos.nogales} />
						</ResultDiscipline>

						<ResultDiscipline title={"Disciplina Básquetbol"}>
							<ResultTable logo1={logos.tijuana} team1={"Tijuana"} score1={"60"} team2={"Agua Prieta"} score2={"28"} logo2={logos.aguaPrieta} />

							<ResultTable logo1={logos.mexicali} team1={"Mexicali"} score1={"35"} team2={"Hermosillo"} score2={"29"} logo2={logos.hermosillo} />
						</ResultDiscipline>
					</ResultDay>
				)}
		  	</div>
		</div>
		);
}
