import React from 'react'
import Image from 'next/image'
import Dot from '../icons/Dot'
import './tableChess.css'

export const TableChess = ({tablero, delegacion1, jBlancas, puntos1, delegacion2, jNegras, puntos2}) => {
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

		<div className='table-grid'>
            <div>{tablero}</div>
            <div>{delegacion1}</div>
            <div>{jBlancas}</div>
            <div>{puntos1}</div>
            <div>{delegacion2}</div>
            <div>{jNegras}</div>
            <div>{puntos2}</div>
        </div>
	</div>
  )
}