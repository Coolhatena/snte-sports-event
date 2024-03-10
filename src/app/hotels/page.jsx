import React from 'react'
import HotelCard from '@/components/HotelCard'

import './page.css'

const Hotels = () => {
  return (
	<div className='hotels-container'>
		<div className='row-1'>
			<HotelCard 
				className='hotel-1'
				title={'Villa Marina'}
				image={'villamarina.webp'}
				web={'https://villamarinabc.com/es?currency=MXN'}
				location={'Av Adolfo López Mateos S/N, Zona Centro, 22800 Ensenada, B.C.'}
				phone_number={'646 178 3351'}
				description={
					`Este moderno hotel se encuentra a 5 minutos a pie del Museo de Historia y a 5 km de la Universidad Autónoma de Baja California. 
					Las habitaciones son sencillas y coloridas, y cuentan con Wi-Fi gratis y TV satelital. Las habitaciones mejoradas tienen sofá cama. Se ofrece servicio a la habitación.
					El estacionamiento es gratuito. Otras comodidades incluyen una piscina al aire libre con solárium, jardines paisajísticos, un restaurante informal y un bar.
					Wi-Fi gratis, Estacionamiento gratuito, Accesible, Piscina al aire libre, Aire acondicionado, Servicio de lavandería etc.`
				}
				/>

			<HotelCard 
				className='hotel-2'
				title={'San Nicolas'}
				image={'sanNicolas.jpg'}
				web={'https://www.snhotelcasino.com/?lang=es'}
				location={'Av. Guadalupe s/n, Centro, Col. Centro, 22800 Ensenada, B.C.'}
				phone_number={'646 176 1901'}
				description={
					`Este hotel casino animado se encuentra cerca de algunos restaurantes, a 8 minutos a pie del Museo de Historia y a 2 km del puerto de Ensenada. 
					Las habitaciones son sencillas y cuentan con balcón, Internet de alta velocidad, TV y cafetera. Se ofrece servicio a la habitación.
					El estacionamiento es gratuito. Hay una piscina al aire libre con restobar. Entre otras comodidades, se incluyen tinas y un área de spa con masajes. 
					El casino está abierto las 24 horas. etc.`
				}
				/>
		</div>		
		
		<div className='row-2'>
			<HotelCard 
				className='hotel-3'
				title={'Corona'}
				image={'corona.jpg'}
				web={'https://www.hotelcorona.com.mx/es/'}
				location={'Lázaro Cárdenas 1442, Bahía de Ensenada, 22880 Ensenada, B.C'}
				phone_number={'646 176 0901'}
				description={
					`Este hotel tranquilo se encuentra frente al puerto de Ensenada, a 4 minutos a pie de las exhibiciones regionales del Museo de Historia y a 8 minutos a pie del parque junto al puerto Ventana al Mar.
					Las habitaciones son sencillas y cuentan con balcón, Wi-Fi gratis, TV de pantalla plana y caja fuerte. 
					Las suites incluyen también sofá cama, microondas, frigobar, bañera con hidromasaje, tetera y cafetera. 
					Las suites mejoradas de dos niveles incluyen también chimenea y barra con lavabo. Se ofrece servicio a la habitación.
					El estacionamiento es gratuito. Hay un restaurante colorido con terraza y un café/bar tranquilo. Entre otras comodidades, se incluyen una sala de ejercicios, una piscina al aire libre y un spa.`
				}
				/>
		</div>
	</div>
  )
}

export default Hotels