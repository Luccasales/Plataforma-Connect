import React from 'react'
import styles from './Home.module.scss'
import imgInicial from '../../../assets/img-tela-inicial.png'
const Home = () => {
  return (
    <section className={styles.Home}>
      <div className={styles.text}>
        <h1>Projetos sociais que transformam</h1>
        <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade</p>
      </div>
      <img src={imgInicial} alt="Foto da mão com um mundo" />
    </section>
  )
}

export default Home