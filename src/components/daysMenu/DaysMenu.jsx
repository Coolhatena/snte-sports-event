import React from 'react'
import Image from 'next/image'
import Dot from '../icons/Dot'
import './daysMenu.css'

export const DaysMenu = ({ onDayChange }) => {
  return (
	<div className='days-container'>
		<button onClick={() => onDayChange('day1')}>
            <h2>Día 1</h2>
        </button>

        <button onClick={() => onDayChange('day2')}>
            <h2>Día 2</h2>
        </button>

        <button onClick={() => onDayChange('day3')}>
            <h2>Día 3</h2>
        </button>

        <button onClick={() => onDayChange('day4')}>
            <h2>Día 4</h2>
        </button>

        <button onClick={() => onDayChange('day5')}>
            <h2>Día 5</h2>
        </button>
	</div>
  )
}
