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
import { ComboAtletismo } from '../comboAtletismo/ComboAtletismo';
import { TableChessRow } from '../tableChess/tableChessRow/TableChessRow';
import { TableAthleticsRow } from '../tableAthletics/tableAthleticsRow/TableAthleticsRow';
import { TableAthletics } from '../tableAthletics/TableAthletics';

export const ResultsInfo = () => {
	const [selectedDay, setSelectedDay] = useState('day1');
	const [query, setQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('Categoria')

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
									delegacion2={"Culiacán"}
									jNegras={"Ernesto Alonso Contreras Salazar"}
									puntos2={"0"}
								/>

								<TableChessRow 
									tablero={"2"}
									delegacion1={"Ensenada"} 
									jBlancas={"Eddie Helbert Clemente Torres"}
									puntos1={"1"}
									delegacion2={"Hermosillo"}
									jNegras={"María Teresa Vivian"}
									puntos2={"0"}
								/>

								<TableChessRow 
									tablero={"3"}
									delegacion1={"Hermosillo"} 
									jBlancas={"José De Jesús Netzahualcoyotl Soots"}
									puntos1={"0"}
									delegacion2={"La Paz"}
									jNegras={"Priscilla Castillo Madrid"}
									puntos2={"1"}
								/>

								<TableChessRow 
									tablero={"4"}
									delegacion1={"Mexicali"} 
									jBlancas={"Fernando Javier Haro Navarro"}
									puntos1={"1"}
									delegacion2={"Nogales"}
									jNegras={"Nelva Angélica Romero Rodríguez"}
									puntos2={"0"}
								/>

								<TableChessRow 
									tablero={"5"}
									delegacion1={"Tijuana"} 
									jBlancas={"Juán José Gómez Quezada"}
									puntos1={"1"}
									delegacion2={"Nogales"}
									jNegras={"Francisco Gastelum Monarrres"}
									puntos2={"0"}
								/>
							</TableChess>
						</ResultDiscipline>

						<ResultDiscipline title={"Disciplina atletismo"}>
							<ComboAtletismo 
								selectedCategory={selectedCategory}
								setSelectedCategory={setSelectedCategory}
								query={query}
								setQuery={setQuery}
							/>

							{selectedCategory !== 'Deportes de Exhibicion' && (

								<TableAthletics selectedCategory={selectedCategory}>
									{selectedCategory === 'Jumbo (60 en adelante) Varonil' && (
										<TableAthleticsRow
											city={"Mexicali -D-V-5"}
											name={"Fernando Avelar Martinez"}
											time={"01:07:40"}
											place={"1ro."}
										/>
									)}

									{selectedCategory === 'Master (40-49 años) Varonil' && (
										<TableAthleticsRow
											city={"Mexicali -D-V-5"}
											name={"Jesus Martin Valdez Duarte"}
											time={"01:07:40"}
											place={"1ro."}
										/>
									)}

									{selectedCategory === 'Super-Master (50-59 años) Femenil' && (
										<>
											<TableAthleticsRow
												city={"La Paz -D-V-7"}
												name={"Luscely Gomez Herrara"}
												time={"18.75"}
												place={"1ro."}
											/>

											<TableAthleticsRow
												city={"Hermosillo -D-V-97"}
												name={"Alma Catalina Gamez Meza"}
												time={"20.41"}
												place={"2do."}
											/>

											<TableAthleticsRow
												city={"Nogales -D-V-99"}
												name={"Maribel Herrera Velarde"}
												time={"24.28"}
												place={"3ro."}
											/>
										</>
									)}

									{selectedCategory === 'Super-Master (50-59 años) Varonil' && (
										<>
											<TableAthleticsRow
												city={"Ensenada -D-V-4"}
												name={"Martin Franco Jaramillo"}
												time={"14.28"}
												place={"1ro."}
											/>

											<TableAthleticsRow
												city={"Nogales -D-V-99"}
												name={"Joel Hirales Rochin"}
												time={"15.88"}
												place={"2do."}
											/>

											<TableAthleticsRow
												city={"Huatabampo -D-V-98"}
												name={"Damian Alberto Valdez Morales"}
												time={"16.81"}
												place={"3ro."}
											/>
										</>
									)}

									{selectedCategory === 'Master (40-49 años) Femenil' && (
										<>
											<TableAthleticsRow
												city={"Culiacan -D-V-92"}
												name={"Rosa Ana Sanchez Fletes Meraz"}
												time={"18.10"}
												place={"1ro."}
											/>

											<TableAthleticsRow
												city={"Nogales -D-V-99"}
												name={"Guadalupe Irasema Parra Arriola"}
												time={"18.48"}
												place={"2do."}
											/>

											<TableAthleticsRow
												city={"Huatabampo -D-V-98"}
												name={"Maria Antonia Armenta Nieblas"}
												time={"21.26"}
												place={"3ro."}
											/>
										</>
									)}

									{selectedCategory === 'Master (40-49 años) Varonil' && (
										<>
											<TableAthleticsRow
												city={"Nogales -D-V-99"}
												name={"Sergio Alfredo Araujo Duran"}
												time={"14.66"}
												place={"1ro."}
											/>

											<TableAthleticsRow
												city={"Mexicali -D-V-5"}
												name={"José Alfredo Montaño Avila"}
												time={"14.90"}
												place={"2do."}
											/>

											<TableAthleticsRow
												city={"Ensenada -D-V-4"}
												name={"Oscar Martín Tirado Ochoa"}
												time={"15.60"}
												place={"3ro."}
											/>
										</>
									)}

									{selectedCategory === 'Veterano (30-39 años) Femenil' && (
										<>
											<TableAthleticsRow
												city={"Mexicali -D-V-5"}
												name={"Marisol Arevalos Sánchez"}
												time={"15.35"}
												place={"1ro."}
											/>

											<TableAthleticsRow
												city={"Mexicali -D-V-5"}
												name={"Liliana Sánchez Ortega"}
												time={"17.79"}
												place={"2do."}
											/>
										</>
									)}

									{selectedCategory === 'Veterano (30-39 años) Varonil' && (
										<>
											<TableAthleticsRow
												city={"La Paz -D-V-7"}
												name={"David Antonio Ibarra Angulo"}
												time={"12.26"}
												place={"1ro."}
											/>

											<TableAthleticsRow
												city={"La Paz -D-V-7"}
												name={"Ruben Aramis Larios Ramírez"}
												time={"13.83"}
												place={"2do."}
											/>

											<TableAthleticsRow
												city={"Hermosillo -D-V-97"}
												name={"Roman Alberto Zayas Castillo"}
												time={"17.58"}
												place={"3ro."}
											/>
										</>
									)}

									{selectedCategory === 'Libre (hasta 29 años) Femenil' && (
										<>
											<TableAthleticsRow
												city={"La Paz -D-V-7"}
												name={"Andrea Lisset Salazar Rodarte"}
												time={"14.13"}
												place={"1ro."}
											/>

											<TableAthleticsRow
												city={"Mexicali -D-V-5"}
												name={"Karen Yaneli Cardozo Cano"}
												time={"18.72"}
												place={"2do."}
											/>
										</>
									)}

									{selectedCategory === 'Libre (hasta 29 años) Varonil' && (
										<>
											<TableAthleticsRow
												city={"Mexicali -D-V-5"}
												name={"Hernan Iván Hernández Martínez"}
												time={"15.40"}
												place={"1ro."}
											/>

											<TableAthleticsRow
												city={"Nogales -D-V-99"}
												name={"Jonathan Eric García Múñoz"}
												time={"17.30"}
												place={"2do."}
											/>
										</>
									)}

									{selectedCategory === 'Jumbo (60 en adelante) Femenil' && (
										<>
											<TableAthleticsRow
												city={"Ensenada -D-V-4"}
												name={"Ma Gloria Rodríguez Rodríguez"}
												time={"7.10"}
												place={"1ro."}
											/>

											<TableAthleticsRow
												city={"La Paz -D-V-7"}
												name={"Virginia Ilescas Vela"}
												time={"8.00"}
												place={"2do."}
											/>
										</>
									)}

									{selectedCategory === 'Super-Master (50-59 años) Femenil' && (
										<>
											<TableAthleticsRow
												city={"Hermosillo -D-V-97"}
												name={"Leticia Echagaray"}
												time={"9.21"}
												place={"1ro."}
											/>

											<TableAthleticsRow
												city={"Hermosillo -D-V-97"}
												name={"Maria Luisa Valadez"}
												time={"10.36"}
												place={"2do."}
											/>
										</>
									)}

									{selectedCategory === 'Jumbo (60 en adelante) Varonil' && (
										<>
											<TableAthleticsRow
												city={"Ensenada -D-V-4"}
												name={"Rodolfo Acosta Ojeda"}
												time={"6.23"}
												place={"1ro."}
											/>

											<TableAthleticsRow
												city={"Huatabampo -D-V-98"}
												name={"Ramón Saul Lugo Guerra"}
												time={"12.54"}
												place={"2do."}
											/>
										</>
									)}

									{selectedCategory === 'Super-Master (50-59 años) Varonil' && (
										<>
											<TableAthleticsRow
												city={"Huatabampo -D-V-98"}
												name={"Arnulfo Ibarra Camargo"}
												time={"5.51"}
												place={"1ro."}
											/>
										</>
									)}

									{selectedCategory === 'Master (40-49 años) Varonil' && (
										<>
											<TableAthleticsRow
												city={"Ensenada -D-V-4"}
												name={"Juan Pablo Vite Frías"}
												time={"4.59"}
												place={"1ro."}
											/>

											<TableAthleticsRow
												city={"Mexicali -D-V-5"}
												name={"Heriberto Montoya González"}
												time={"9.10"}
												place={"2do."}
											/>
										</>
									)}

								</TableAthletics>
							)}

							{selectedCategory === 'Deportes de Exhibicion' && (
								<>
									<TableAthletics selectedCategory={"Impulso de Bala Femenil"}>
										<TableAthleticsRow
											city={"Tijuana -D-V-6"}
											name={"Hilda Estrada Manzo"}
											time={"5.36"}
											place={"1ro."}
										/>

										<TableAthleticsRow
											city={"Mexicali -D-V-5"}
											name={"María Concepcin López Gerardo"}
											time={"5.20"}
											place={"2do."}
										/>

										<TableAthleticsRow
											city={"Hermosillo -D-V-97"}
											name={"Fernanda Godinez Almaraz"}
											time={"5.04"}
											place={"3ro."}
										/>
									</TableAthletics>

									<TableAthletics selectedCategory={"Impulso de Bala Varonil"}>
										<TableAthleticsRow
											city={"Agua Prieta -D-V-96"}
											name={"Lamberto Vazquez Veloz"}
											time={"9.43"}
											place={"1ro."}
										/>

										<TableAthleticsRow
											city={"Hermosillo -D-V-97"}
											name={"Michael Figueroa"}
											time={"8.67"}
											place={"2do."}
										/>

										<TableAthleticsRow
											city={"Hermosillo -D-V-97"}
											name={"Jorge Castellanos"}
											time={"8.63"}
											place={"3ro."}
										/>
									</TableAthletics>
								</>
							)}

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
