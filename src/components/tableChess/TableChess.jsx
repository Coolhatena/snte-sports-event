import React from 'react'
import './tableChess.css'

export const TableChess = ({ children }) => {
  return (
	<div className='table-container'>
        <div className='encabezado-grid'>
            <div>Tablero</div>
            <div>Delegación</div>
            <div>Jugador Blancas</div>
            <div>Puntos</div>
            <div>Delegación</div>
            <div>Jugador Negras</div>
            <div>Puntos</div>
        </div>

		{children}
	</div>
  )
}