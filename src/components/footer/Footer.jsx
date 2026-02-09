import React from 'react'
import styles from './Footer.module.scss'

import logo from '../../assets/logo.png'
import whatsapp from '../../assets/whatsapp.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'

//Depois linkar o instagram e o linkedin

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <img src={logo} alt="" />
      <p>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>

      <ul>
        <li><img src={whatsapp} alt="" /></li>
        <li><img src={instagram} alt="" /></li>
        <li><img src={linkedin} alt=""  className={styles.linkedin}/></li>
      </ul>
    </footer>
  )
}

export default Footer