import React from 'react'
import Image from 'next/image'
import Contact from '@/components/contact/page.jsx'
import Information from '@/components/information/page.jsx'
import Gallery from '@/components/gallery/page.jsx'
import Timetable from '@/components/timetable/Timetable'
import Footer from '@/components/footer/Footer.jsx'

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
    <Timetable/>
    <Contact/>

	</div>
  )
}

export default Main