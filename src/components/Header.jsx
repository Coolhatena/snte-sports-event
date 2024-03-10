import React from 'react'
import './styles/header.css'

import Link from 'next/link'

const Header = () => {
  return (
	<div className='container'>
		<Link href='/' className='title'>SNTE</Link>
		<Link href='#' className='button'>Convocatoria</Link>
		<Link href='#' className='button'>Reglamento Deportivo</Link>
		<Link href='/hotels' className='button'>Hoteles</Link>
	</div>
  )
}

export default Header