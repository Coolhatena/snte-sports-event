import React from 'react'
import './resultDay.css'

export const ResultDay = ({title, children}) => {
  return (
	<div className='resultday-container'>
		<h2 className='resultday-title'>{title}</h2>
		{children}
	</div>
  )
}
