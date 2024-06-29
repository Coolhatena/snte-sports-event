import React from 'react'
import '../finalChess.css'

export const FinalChessRow = ({delegacion, nombre, puntos, lugar}) => {
  return (
	<div className='table-final-grid'>
            <div>{delegacion}</div>
            <div>{nombre}</div>
            <div>{puntos}</div>
            <div>{lugar}</div>
    </div>
  )
}
