import React from 'react'
import './finalChess.css'

export const FinalChess = ({ children }) => {
  return (
	<div className='table-final-container'>
        <div className='encabezado-final-grid'>
            <div>Delegación</div>
            <div>Nombre</div>
            <div>Puntos</div>
            <div>Lugar</div>
        </div>

		{children}
	</div>
  )
}