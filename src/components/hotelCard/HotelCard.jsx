import React from 'react'
import './hotelCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faGlobe, faCircle } from '@fortawesome/free-solid-svg-icons'

// TODO: ENHANCE STYLES FOR THIS COMPONENT
const HotelCard = ({title, image, web, location, phone_number, description, rooms=[]}) => {
  return (
	<div className='card-container'>
		<div className='card-image-title' style={{backgroundImage: `url(img/${image})`}}>
			<div className='card-image-title-content'>
				<h3 className='card-title'>{title}</h3>
			</div>
		</div>
		<div className='card-content'>
			<div className='card-info-container'>
				<FontAwesomeIcon icon={faGlobe} className='card-icon'/>
				<a className='card-website' href={web}>{web}</a>
			</div>
			<div className='card-info-container'>
				<FontAwesomeIcon icon={faLocationDot} className='card-icon'/>
				<p className='card-location'>{location}</p>
			</div>

			<div className='card-info-container'>
				<FontAwesomeIcon icon={faPhone} className='card-icon'/>
				<p className='card-phone'>{phone_number}</p>
			</div>

			<div className='card-description-container'>
				<p className='card-description-title'>Descripcion:</p>
				<p className='card-description'>{description}</p>
			</div>

			<div className='card-description-container'>
				<p className='card-description-title'>Habitaciones:</p>
				{
					rooms.map( room => <div className='card-info-container'>
											<FontAwesomeIcon icon={faCircle} className='card-icon__list'/>
											<p className='card-description'>{room}</p>
										</div>
							)
				}
				
			</div>
		</div>
	</div>
  )
}

export default HotelCard