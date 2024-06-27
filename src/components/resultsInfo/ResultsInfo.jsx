import Image from 'next/image';
import ItemList from '../items/ItemList';
import './resultsInfo.css'
import { ResultDay } from '../resultDay/ResultDay';
import { DaysMenu } from '../daysMenu/DaysMenu';
import { ResultTable } from '../resultTable/ResultTable';
import { ResultDiscipline } from '../resultDiscipline/ResultDiscipline';

export const ResultsInfo = () => {
	return (
		<div>
		  <DaysMenu/>
  
		  <div className='results-container'>

		  	<ResultDay title={"Resultados - día 1"}>
				<ResultDiscipline title={"Disciplina Softbol"}>
					<ResultTable logo1={"/img/logos-tecnm/logo-mazatlan.png"} team1={"Mazatlán"} score1={"13"} team2={"Nogales"} score2={"3"} logo2={"/img/logos-tecnm/logo-nogales.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-guaymas.png"} team1={"Guaymas"} score1={"11"} team2={"Tijuana"} score2={"0"} logo2={"/img/logos-tecnm/logo-tijuana.png"} />
				</ResultDiscipline>

				<ResultDiscipline title={"Disciplina Fútbol Soccer"}>
					<ResultTable logo1={"/img/logos-tecnm/logo-ensenada.png"} team1={"Ensenada"} score1={"6"} team2={"Huatabampo"} score2={"1"} logo2={"/img/logos-tecnm/logo-huatabampo.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-culiacan.png"} team1={"Culiacán"} score1={"2"} team2={"La Paz"} score2={"0"} logo2={"/img/logos-tecnm/logo-la-paz.png"} />
				</ResultDiscipline>

				<ResultDiscipline title={"Disciplina Voleibol Femenil"}>
					<ResultTable logo1={"/img/logos-tecnm/logo-ensenada.png"} team1={"Ensenada"} score1={"2"} team2={"Nogales"} score2={"0"} logo2={"/img/logos-tecnm/logo-nogales.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-la-paz.png"} team1={"La Paz"} score1={"2"} team2={"Mexicali"} score2={"1"} logo2={"/img/logos-tecnm/logo-mexicali.png"} />
				</ResultDiscipline>

				<ResultDiscipline title={"Disciplina Básquetbol"}>
					<ResultTable logo1={"/img/logos-tecnm/logo-la-paz.png"} team1={"La Paz"} score1={"85"} team2={"Agua Prieta"} score2={"19"} logo2={"/img/logos-tecnm/logo-agua-prieta.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-nogales.png"} team1={"Nogales"} score1={"44"} team2={"Mexicali"} score2={"18"} logo2={"/img/logos-tecnm/logo-mexicali.png"} />
				</ResultDiscipline>
			</ResultDay>


			<ResultDay title={"Resultados - día 2"} >
				<ResultDiscipline title={"Disciplina Softbol"}>
					<ResultTable logo1={"/img/logos-tecnm/logo-mazatlan.png"} team1={"Mazatlán"} score1={"35"} team2={"Hermosillo"} score2={"3"} logo2={"/img/logos-tecnm/logo-hermosillo.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-nogales.png"} team1={"Nogales"} score1={"15"} team2={"Tijuana"} score2={"8"} logo2={"/img/logos-tecnm/logo-tijuana.png"} />
				</ResultDiscipline>

				<ResultDiscipline title={"Disciplina Fútbol Soccer"}>
					<ResultTable logo1={"/img/logos-tecnm/logo-ensenada.png"} team1={"Ensenada"} score1={"1"} team2={"Mazatlán"} score2={"1"} logo2={"/img/logos-tecnm/logo-mazatlan.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-culiacan.png"} team1={"Culiacán"} score1={"6"} team2={"Tijuana"} score2={"0"} logo2={"/img/logos-tecnm/logo-tijuana.png"} />
					
					<ResultTable logo1={"/img/logos-tecnm/logo-mazatlan.png"} team1={"Mazatlán"} score1={"7"} team2={"Huatabampo"} score2={"1"} logo2={"/img/logos-tecnm/logo-huatabampo.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-tijuana.png"} team1={"Tijuana"} score1={"1"} team2={"La Paz"} score2={"1"} logo2={"/img/logos-tecnm/logo-la-paz.png"} />
				</ResultDiscipline>

				<ResultDiscipline title={"Disciplina Voleibol Femenil"}>
					<ResultTable logo1={"/img/logos-tecnm/logo-la-paz.png"} team1={"La Paz"} score1={"2"} team2={"Hermosillo"} score2={"0"} logo2={"/img/logos-tecnm/logo-hermosillo.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-culiacan.png"} team1={"Culiacán"} score1={"2"} team2={"Nogales"} score2={"1"} logo2={"/img/logos-tecnm/logo-nogales.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-hermosillo.png"} team1={"Hermosillo"} score1={"2"} team2={"Mexicali"} score2={"1"} logo2={"/img/logos-tecnm/logo-mexicali.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-culiacan.png"} team1={"Culiacán"} score1={"2"} team2={"Ensenada"} score2={"0"} logo2={"/img/logos-tecnm/logo-ensenada.png"} />
				</ResultDiscipline>

				<ResultDiscipline title={"Disciplina Voleibol Varonil"}>
					<ResultTable logo1={"/img/logos-tecnm/logo-culiacan.png"} team1={"Culiacán"} score1={"2"} team2={"Mexicali"} score2={"0"} logo2={"/img/logos-tecnm/logo-mexicali.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-huatabampo.png"} team1={"Huatabampo"} score1={"2"} team2={"La Paz"} score2={"0"} logo2={"/img/logos-tecnm/logo-la-paz.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-culiacan.png"} team1={"Culiacán"} score1={"2"} team2={"Nogales"} score2={"1"} logo2={"/img/logos-tecnm/logo-nogales.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-la-paz.png"} team1={"La Paz"} score1={"2"} team2={"Ensenada"} score2={"1"} logo2={"/img/logos-tecnm/logo-ensenada.png"} />
				</ResultDiscipline>

				<ResultDiscipline title={"Disciplina Básquetbol"}>
					<ResultTable logo1={"/img/logos-tecnm/logo-nogales.png"} team1={"Nogales"} score1={"53"} team2={"Hermosillo"} score2={"20"} logo2={"/img/logos-tecnm/logo-hermosillo.png"} />

					<ResultTable logo1={"/img/logos-tecnm/logo-la-paz.png"} team1={"La Paz"} score1={"38"} team2={"Tijuana"} score2={"30"} logo2={"/img/logos-tecnm/logo-tijuana.png"} />
				</ResultDiscipline>
			</ResultDay>

		  </div>
		</div>
		);
}
