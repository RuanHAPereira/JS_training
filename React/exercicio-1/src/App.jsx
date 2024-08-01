import Logo from '../src/assets/react.png'

export default function App () {
  return (
    <div>
      <div>
        <img src={Logo} alt="Logo react" />
        <h1>React</h1>
        <p>A biblioteca para interfaces de usuários web e nativas.</p>
        
        <div>
          <button>Aprenda React</button>
          <button>Referência da API</button>
        </div>

      </div>

      <hr />

      <div>
        <h1>Crie interfaces de usuário de componentes</h1>
        <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes.</p>

      </div>

      <hr />

      <div>
        <h1>Escreva componentes com código e marcação</h1>
        <p>Componentes React são funções Javascript. A sintaxe de marcação é chamada de JSX. É uma extensão da sintaxe Javascript popularizada pelo React.</p>
      </div>

      <hr />
      
      <div>
        <h1>Próximos passos:</h1>
        <ul>
          <li>Uso de dados dinâmicos no JSX</li>
          <li>Criação de novos componentes</li>
          <li>Estilização de componentes</li>
          <li>Reutilização de componentes</li>
          <li>Uso de props e children</li>
          <li>Uso de eventos do Javascript</li>
        </ul>
      </div>
    </div>
  )
}