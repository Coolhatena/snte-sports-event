'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import './header.css'

import Link from 'next/link'

const Header = () => {
	const [isMenuActive, setisMenuActive] = useState(true)

	const toogleMenu = () => {
		const linksContainer = document.getElementById('hamburger');
		setisMenuActive(!isMenuActive);
		linksContainer.style.display = isMenuActive ? 'flex' : 'none';
	}

  return (
	<div className='container'>
		<section className='navbar'>
			<a href='/' className="containerLogo">
				<Image src='/img/Logo_Snte_Blanco.png' width={180} height={50} alt='Logo'/>
			</a>

			<div className='mobileMenuButton' onClick={toogleMenu}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#ffff'>
					<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
				</svg>
			</div>
		</section>
		
		<section className='options'>
			<div className='linksContainer' id='hamburger'>
				<Link href='/' className='button'><p>Inicio</p></Link>
				<Link href='/results' className='button'><p>Resultados</p></Link>
				<Link href='/convocatoria' className='button'><p>Convocatoria</p></Link>
				<Link href='https://drive.google.com/file/d/1Ke3fukty1_pO-tuOBln4_P6ZKOy9PQzl/view?usp=sharing' className='button'><p>Reglamento Deportivo</p></Link>
				<Link href='https://docs.google.com/forms/d/e/1FAIpQLScIXNpgvX6zvjTvn6ZdP02WpcVy8IU6GFZ_hGIgVZXSHFD7PQ/viewform?usp=sf_link' 
				className='button'><p>Pre-Registro</p></Link>
				<Link href='/registration' className='button'><p>Registro</p></Link>
				<Link href='/hotels' className='button'><p>Hoteles</p></Link>
			</div>
		</section>
	</div>
  )
}

export default Header