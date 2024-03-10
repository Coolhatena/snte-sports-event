import React from 'react'
import Image from 'next/image'
import './styles/header.css'

import Link from 'next/link'

const Header = () => {
  return (

	<nav className='bg-blueIte'>
		<div className='container'>
			<a href='https://snte.org.mx' className="flex items-center space-x-3 rtl:space-x-reverse">
				<Image src='/img/Logo_Snte_Blanco.png' className='logo' width={180} height={50} alt='Logo'/>
			</a>
			<Link href='#' className='button'>Convocatoria</Link>
			<Link href='#' className='button'>Reglamento Deportivo</Link>
			<Link href='/hotels' className='button'>Hoteles</Link>
		</div>
	</nav>
  )
}

export default Header