import React from 'react'
import './tableAthletics.css'

export const TableAthletics = ({ children, selectedCategory, distance }) => {
  return (
	<div className='table-container'>
        <div className='encabezado-grid'>
            <div className='category'>{selectedCategory}</div>
            <div>{distance}</div>
            <div>Lugar</div>
        </div>

		{children}
	</div>
  )
}