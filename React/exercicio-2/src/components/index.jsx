import PropTypes from 'prop-types'
import styles from "./styles.module.css"

export default function Card({ title, poster }) {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={poster} alt={title} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>
          Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!
        </p>
        <button className={styles.button}>Comprar agora</button>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}