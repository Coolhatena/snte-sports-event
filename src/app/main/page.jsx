import React from 'react'
import Image from 'next/image'
import Contact from '@/app/contact/page'
import Information from '../information/page'
import Gallery from '../gallery/page'

import './main.css'
const Main = () => {
  return (
	<div>
		
		<Image
          src={'/img/zyro-snte.png'}
          alt="SNTE seccion 2"
          layout='responsive'
          width={1300}
          height={200}
    />
		
    <Information/>
    <Gallery/>
    <Contact/>
	</div>
  )
}

export default Main