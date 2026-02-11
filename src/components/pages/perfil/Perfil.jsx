import styles from "./Perfil.module.scss";

import fotoPerfil from '../../../assets/LuccaEspelho.jpeg'

function Perfil() {
  return (
    <section className={styles.containerTelaPerfil}>
      <article>
        <img src={fotoPerfil} alt="Foto de perfil" />

        <div className={styles.cardInfo}>
          <h2> Lucca Sales </h2>
          <h3> Voluntária Ativa</h3>

          <p className={styles.paragrafoSobreMim}>
            Apaixonada por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <address>
            <p> São Paulo</p>
            <p>lucca.cps@hotmail.com</p>
            <p> Membro desde Janeiro de 2022</p>
          </address>

          <ul className={styles.listaInteresses}>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>

      </article>
    </section>
  );
}

export default Perfil;