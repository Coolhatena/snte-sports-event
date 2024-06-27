import React from 'react'
import Image from 'next/image'
import Dot from '../icons/Dot'
import './daysMenu.css'

export const DaysMenu = () => {
  return (
	<div className='days-container'>
		<button>
            <h2><b>Día 1</b></h2>
        </button>

        <button>
            <h2>Día 2</h2>
        </button>

        <button>
            <h2>Día 3</h2>
        </button>

        <button>
            <h2>Día 4</h2>
        </button>

        <button>
            <h2>Día 5</h2>
        </button>
	</div>
  )
}
