import React from 'react'
import HotelCard from '@/components/hotelCard/HotelCard.jsx'

import './page.css'

const Hotels = () => {
  return (
	<div className='hotels-container'>
			<HotelCard 
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
				rooms={['2 personas $1638.85 por noche tarifa del domingo a jueves']}
			/>

			<HotelCard 
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
				rooms={['Habitaciones dobles por noche $2755 (4 adultos)', 
						'Habitación Sencilla por noche $2115 (2 adultos)'
						]}
			/>

			<HotelCard 
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
				rooms={['Habitaciones: para 2 personas o 4 personas $1900 por noches (es el mismo costo)']}
			/>

			<HotelCard 
				title={'Rey Sol'}
				image={'reySol.jpg'}
				web={'https://www.hoteles.com/ho192032/posada-el-rey-sol-ensenada-mexico/'}
				location={'Av. Blancarte 130, Zona Centro, 22800 Ensenada, B.C.'}
				phone_number={'646 178 1601'}
				description={
					`Posada El Rey Sol ofrece una ubicación extraordinaria, está a solo unos pasos de Avenida Adolfo López Mateos. 
					Los huéspedes pueden darse un buen chapuzón en la alberca al aire libre. 
					Además, entre los servicios sin costo extra, pueden disfrutar de wifi, estacionamiento y el desayuno continental todos los días de 08:00 a 11:30. 
					Entre sus amenidades y servicios destacan su terraza y su jardín. 
					A otros visitantes les gusta el personal amable y el restaurante.`
				}
				rooms={['Habitacion sencilla para una persona $1800 (Incluyendo desayuno $1950)',
						'Habitacion doble para dos personas $2000 (Incluyendo desayuno $2300)'
						]}		
			/>

			<HotelCard 
				title={'Estero Beach'}
				image={'esteroBeach.webp'}
				web={'https://resortesterobeach.com/es?currency=MXN'}
				location={'Calle Playas, Del Estero S/N, Ex-Ejido Chapultepec, 22785 Ensenada, B.C.'}
				phone_number={'646 178 1601'}
				description={
					`Además de ubicarse a solo 15 minutos en auto de Avenida Adolfo López Mateos, Estero Beach Hotel & Resort cuenta con acceso a una playa privada con sombrillas, masajes y vóleibol. 
					Diviértete como nunca en su alberca al aire libre. 
					Si quieres consentirte con un momento lleno de relajación, puedes hacerlo con un masaje de tejido profundo. 
					Frente a la playa, Las Terrazas sirve el desayuno, la comida y la cena. 
					La propiedad destaca por su bar junto a la alberca, su chapoteadero y su snack bar o deli. 
					El personal amable y el restaurante están muy bien calificados por otros visitantes.`
				}
				rooms={['Habitaciones con vistas al mar $225 USD',
						'Habitaciones con vista a la alberca $216 USD',
						'Habitaciones con vista al jardín $180 USD',
						'Habitaciones estándar $162 USD'
						]}		
			/>

			<HotelCard 
				title={'City Express'}
				image={'cityExpress.jpg'}
				web={'https://www.marriott.com/es/hotels/tijxe-city-express-ensenada/'}
				location={'Boulevard Costero B1-A2, Manzana 29, Carlos Pacheco, 22890 Ensenada, B.C.'}
				phone_number={'646 152 2265'}
				description={
					`Instalaciones modernas y servicio eficiente es lo que encontrará a su llegada a City Express Ensenada. 
					Luego de recorrer restaurantes, viñedos y probar la cocina de autor de la localidad, nuestro hotel le espera para un merecido descanso. 
					Nuestras amenidades, servicios y desayuno tipo americano de cortesía están diseñados para que tenga todo lo que necesita en sus vacaciones o viajes de negocios.`
				}
				rooms={['Codigo de reservacion para precio especial: PRENACIONAL ITE',
						'Habitación Sencilla $1525.50',
						'Habitación Doble $1661.10',
						]}		
			/>
	</div>
  )
}

export default Hotels