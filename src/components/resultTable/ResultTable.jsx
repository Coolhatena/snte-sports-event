import React from 'react'
import Image from 'next/image'
import Dot from '../icons/Dot'
import './resultTable.css'

export const ResultTable = ({logo1, team1, score1, team2, logo2, score2}) => {
  return (
	<div className='resultTable-container'>
		<div className='resultTable-grid'>
            <div className='logo'>
                <Image src={logo1} width={100} height={100}/>
            </div>
            <div>{team1}</div>
            <div className='score'>
                <h3 className='score-left'>{score1}</h3>
                <div>
                    <Dot/>
                </div>
                <h3 className='score-right'>{score2}</h3>
            </div>
            <div>{team2}</div>
            <div className='logo'>
                <Image src={logo2} width={100} height={100}/>
            </div>
        </div>
	</div>
  )
}
