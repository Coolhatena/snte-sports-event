import React from 'react'
import '../tableAthletics.css'

export const TableAthleticsRow = ({city, name, time, place}) => {
  return (
	<div className='table-athletics-grid'>
            <div className='city'>{city}</div>
            <div className='name'>{name}</div>
            <div className='time'>{time}</div>
            <div className='place'>{place}</div>
    </div>
  )
}
