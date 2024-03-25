import React from 'react'
import './page.css'

const Contact = () => {
  return (
	<div className='contact-container'>
        <div className='flex'>
            <div className='header'>
                <h1>Contact Us</h1>
                <p>Puedes contactarnos en la siguiente direccion:</p>
            </div>
           
            <div className='grid-container'>
                <div className='item'>
                    <div className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill='#001E3D'>
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                        </svg>
                    </div>
                    <h2>Location</h2>
                    <p>Boulevard Tecnológico No. 150 Ex-ejido Chapultepec, 22780 Ensenada, B.C.</p>
                </div>

                <div className='item'>
                    <div className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill='#001E3D'>
                            <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                        </svg>
                    </div>
                    <h2>Hour</h2>
                    <p>Mon-Fri: 8am-9pm</p>
                    <p>Sat: 8am-6pm</p>
                </div>

                <div className='item'>
                    <div className='icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='#001E3D'>
                            <path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"/>
                        </svg>
                    </div>

                    <h2>Social</h2>
                    <div className='item-icon'>
                        <a href='https://www.facebook.com/TecNMITEnsenada?ref=embed_page' className='item-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill='#001E3D' viewBox="0 0 30 30">
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                            </svg>
                            <p>Facebook</p>
                        </a>
                    </div>

                    <div className='item-icon'>
                        <a href='https://www.facebook.com/TecNMITEnsenada?ref=embed_page' className='item-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill='#001E3D' viewBox="0 0 50 50">
                                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                            </svg>
                            <p>Instagram</p>
                        </a>
                    </div>

                    <div className='item-icon'>
                        <a href='https://www.facebook.com/TecNMITEnsenada?ref=embed_page' className='item-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill='#001E3D' viewBox="0 0 512 512">
                                <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/>
                            </svg>
                            <p>Tecnm ITE</p>
                        </a>
                    </div>
                </div>
                
                <div className="iframe-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3390.6987657753293!2d-116.59238638484237!3d31.805958681276163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88e39f768d7d3%3A0x536c67072ac8e5e7!2sInstituto%20Tecnol%C3%B3gico%20de%20Ensenada!5e0!3m2!1ses-419!2smx!4v1599378777821!5m2!1ses-419!2smx"
                        width="300"
                        height="300"
                        frameBorder="0"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        className='map-iframe'
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact