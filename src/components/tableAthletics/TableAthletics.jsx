import React from 'react'
import './tableAthletics.css'

export const TableAthletics = ({ children, selectedCategory }) => {
  return (
	<div className='table-container'>
        <div className='encabezado-grid'>
            <div className='category'>{selectedCategory}</div>
            <div>Distancia</div>
            <div>Lugar</div>
        </div>

		{children}
	</div>
  )
}