import Image from 'next/image';
import ItemList from '../items/ItemList';
import './registrationInfo.css'

export const RegistrationInfo = () => {
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
			  <h1>Registro</h1>
			  <p className='subtitulo-convocatoria'>“X Evento Nacional Cultural y Deportivo de la Sección 61 del SNTE Zona Norte Pacífico”</p>
		  </div>
  
		  <div className='convocatoria-container'>
			<h4 className='subtitulo-bases'>Presentar la siguiente documentación en físico:</h4>
			
			<ul className='lista-bases'>
			  <li>Cédula de inscripción: <a href="https://docs.google.com/document/d/1FRvrV6tFrtkcNmRHVp153GfU8OvGYu2q/edit?usp=sharing&ouid=111562611461705943793&rtpof=true&sd=true">Descargar aquí</a></li>
			  <li>Cédula de registro: <a href="https://docs.google.com/document/d/1l8t3QnCuwAeE7JDrPTkrvEkjZWtaFJpo/edit?usp=sharing&ouid=111562611461705943793&rtpof=true&sd=true">Descargar aquí</a></li>
			  <li>Formato de credencial: <a href="https://docs.google.com/document/d/1LjMoWfRlITHBGzc9Ht4tse8y2o6HqFva/edit?usp=sharing&ouid=111562611461705943793&rtpof=true&sd=true">Descargar aquí</a></li>
			  <li>Oficio enviado por el secretario gral. y/o secretario de cultura y deporte de la delegación que representa</li>
			  <li>Identificación oficial (Cualquiera de los siguientes documentos válidos)
				<ul>
					<li>Credencial INE (Original y copia por ambos lados)</li>
					<li>Pasaporte mexicano (Original y copia)</li>
					<li>Cédula profesional (Original y Copia)</li>
				</ul>
			  </li>
			  <li>Comprobante de pago correspondiente a la quincena 11/2024 (Copia) </li>
			  <li>Por acuerdo de la secretaría general de la delegación se determinó que la inscripción requerirá una cooperación de $100 mxn por cada participante en cada disciplina, que debe ser entregada en la sede el día del registro</li>
			</ul>
		  </div>
		</div>
		);
}
