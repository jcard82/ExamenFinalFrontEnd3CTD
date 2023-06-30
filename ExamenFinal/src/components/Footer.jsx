import React from 'react'
import { useContext } from 'react'
import {ThemeContext} from "./utils/global.context"


const Footer = () => {
  const themes=useContext(ThemeContext);

  return (
    <footer className={themes.theme}>
      <p>Powered by</p>
      <img src="/images/DH.png" alt='DH-logo' />
      <div className='iconos'>
        <img src="/images/ico-facebook.png" alt='Facebook-logo' className='img1' />
        <img src="/images/ico-instagram.png" alt='Instagram-logo' className='img2'/>
        <img src="/images/ico-tiktok.png" alt='Tiktok-logo' className='img3'/>
        <img src="/images/ico-whatsapp.png" alt='WhatsApp-logo' className='img4'/>
      </div>
    </footer>
  )
}

export default Footer