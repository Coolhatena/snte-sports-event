'use client'
import React from 'react'
import Image from 'next/image'
import './styles/header.css'

import Link from 'next/link'

const Header = () => {
	const toogleMenu = () => {
		const linksContainer = document.querySelector('.linksContainer');

		if(linksContainer.style.display === 'none'){
			linksContainer.style.display = 'flex';
		}

		else{
			linksContainer.style.display = 'none';
		}
	}

  return (
	<div className='container'>
		<section className='navbar'>
			<a href='https://snte.org.mx' className="containerLogo">
				<Image src='/img/Logo_Snte_Blanco.png' width={180} height={50} alt='Logo'/>
			</a>

			<div className='mobileMenuButton' onClick={toogleMenu}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#ffff'>
					<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
				</svg>
			</div>
		</section>
		
		<section className='options'>
			<div className='linksContainer'>
				<Link href='#' className='button'>Home</Link>
				<Link href='#' className='button'>Convocatoria</Link>
				<Link href='#' className='button'>Reglamento Deportivo</Link>
				<Link href='/hotels' className='button'>Hoteles</Link>
			</div>
		</section>
	</div>
  )
}

export default Header