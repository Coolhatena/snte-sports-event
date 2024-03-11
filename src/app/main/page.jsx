import React from 'react'
import Image from 'next/image'
import './main.css'
const Main = () => {
  return (
	<div>
		<Image
          src={'/img/zyro-snte.png'}
          alt="SNTE seccion 2"
          layout='responsive'
          width={1300}
          height={200}
        />
		<div className="texto-principal">
			
			<h1 className="titulo">IX   EVENTO NACIONAL CULTURAL Y DEPORTIVO ZONA NORTE PACÍFICO DEL 25 AL 30 DE JUNIO DE 2023</h1>
			<h2 className="subtitulo">10 al 14 de julio - La Paz, Baja California Sur</h2>
			<p className="parrafo">
				El Prenacional Deportivo La Paz 2023 es un evento que reunirá a los mejores deportistas de todo el país para competir en una variedad de disciplinas.
			</p>
			<p className="parrafo">
				El objetivo del Prenacional Deportivo La Paz 2023 es promover el deporte entre los jóvenes y fomentar la convivencia social. Este evento también servirá como clasificatorio para los Juegos Nacionales CONADE 2023.
			</p>
			<p className="parrafo"> Para más información sobre el Prenacional Deportivo La Paz 2023, puedes visitar la página web oficial: </p>
				<a className="enlace" href="https://sites.google.com/Itlp.edu.mx/prenacionaldeportivolapaz2023">https://sites.google.com/Itlp.edu.mx/prenacionaldeportivolapaz2023</a>
		</div>
	</div>
  )
}

export default Main