import React from 'react'
import styles from './Menu.module.scss'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'

const Menu = () => {
  return (
    <nav className={styles.navbar}>

      <Link to="/">
        <img src={logo} alt="Foto de perfil"  className={styles.logo}/>
      </Link>
        <ul className={styles.itemList}>
            <li><Link to="/">Incio</Link></li>
            <li><Link to="/acoesConnect">Ações da Connect</Link></li>
            <li><Link to="/about">Quem somos</Link></li>
        </ul>
        
      <Link to="/perfil">
        <img src="" alt="Foto de perfil"/>
      </Link>
    </nav>
  )
}

export default Menu