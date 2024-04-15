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
			  <p className='subtitulo-convocatoria'>“X Evento Nacional Cultural y Deportivo de la Sección 61 del SNTE”</p>
		  </div>
  
		  <div className='convocatoria-container'>
			<h4 className='subtitulo-bases'>Presentar la siguiente documentacion en fisico:</h4>
			
			<ul className='lista-bases'>
			  <li>Cedula de registro: <a href="https://docs.google.com/document/d/1l8t3QnCuwAeE7JDrPTkrvEkjZWtaFJpo/edit?usp=sharing&ouid=111562611461705943793&rtpof=true&sd=true">Descargar aqui</a></li>
			  <li>Cedula de inscripcion: <a href="https://docs.google.com/document/d/1FRvrV6tFrtkcNmRHVp153GfU8OvGYu2q/edit?usp=sharing&ouid=111562611461705943793&rtpof=true&sd=true">Descargar aqui</a></li>
			  <li>Oficio enviado por el secretario gral. y/o secretario de cultura y deporte de la delegacion que representa</li>
			  <li>Alguno de los siguientes documentos:
				<ul>
					<li>Copia de credencial INE por ambos lados</li>
					<li>Pasaporte mexicano</li>
					<li>Cedula profesional (Original y Copia)</li>
				</ul>
			  </li>
			  <li>Comprobante de pago correspondiente a la (?) 11/2024 (Copia) </li>
			  <li>Por acuerdo de la secretaría general de la delegacion se determino qe la inscripcion requerira una cooperacion de $100 mxn por cada participante en cada disciplina, que debe ser entregada a la sede el dia del registro</li>
			</ul>
		  </div>
		</div>
		);
}
