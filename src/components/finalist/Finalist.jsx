import React from 'react'
import Image from 'next/image'
import './finalist.css'

export const Finalist = ({logo1, team1, logo2, team2, logo3, team3}) => {
  return (
	<div className='finalist-container'>
		<div className='finalist-row'>
			<div className='team'>
			<h4>1er. Lugar</h4>
				<Image src={logo1} width={150} height={150}/>
				<p>{team1}</p>
			</div>
		</div>
		<div className='finalist-row'>
			{
				team2 &&
				<div className='team'>
					<h4>2do. Lugar</h4>
					<div className='logo'>
						<Image src={logo2} width={130} height={130}/>
					</div>
					<p>{team2}</p>
				</div>
			}

			{
				team3 &&
				<div className='team'>
					<h4>3er. Lugar</h4>
					<div className='logo'>
						<Image src={logo3} width={130} height={130}/>
					</div>
					<p>{team3}</p>
				</div>
			}
		</div>
	</div>
  )
}
