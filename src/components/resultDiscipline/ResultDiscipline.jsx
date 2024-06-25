import React from 'react'
import './resultDiscipline.css'

export const ResultDiscipline = ({title, children}) => {
  return (
	<div className='resultdiscipline-container'>
		<h3 className='resultdiscipline-title'>{title}</h3>
		{children}
	</div>
  )
}
