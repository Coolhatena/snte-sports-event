import React from 'react'
import '../tableChess.css'

export const TableChessRow = ({tablero, delegacion1, jBlancas, puntos1, delegacion2, jNegras, puntos2}) => {
  return (
	<div className='table-grid'>
            <div>{tablero}</div>
            <div>{delegacion1}</div>
            <div>{jBlancas}</div>
            <div>{puntos1}</div>
            <div>{delegacion2}</div>
            <div>{jNegras}</div>
            <div>{puntos2}</div>
    </div>
  )
}
