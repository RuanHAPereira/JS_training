import Card from "./components"
import swPorterImg from './assets/sw-poster.jpg'
import esbPosterImg from './assets/esb-poster.jpg'
import rotPosterImg from './assets/rotj-poster.jpg'

export default function App() {
  return (
    <>
      <h1>Exercício 2</h1>
      <Card title="Pôster: Star Wars (1977)" poster={swPorterImg}/>
      <Card title="Pôster: Império Contra Ataca (1980)" poster={esbPosterImg}/>
      <Card title="Pôster: Retorno de Jedi (1983)" poster={rotPosterImg}/>
    </>
  )
}
