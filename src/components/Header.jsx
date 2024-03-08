import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
	<div className='container'>
		<h1 className='title'>SNTE</h1>
		<a className='button'>Convocatoria</a>
		<a className='button'>Reglamento Deportivo</a>
		<a className='button'>Hoteles</a>
	</div>
  )
}

export default Header