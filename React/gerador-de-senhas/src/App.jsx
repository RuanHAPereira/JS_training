import { useState } from 'react'
import './App.css'

function App() {
  const [senha, setSenha] = useState('')
  const [botaoTexto, setBotaoTexto] = useState('Copiar')
  const [tamanhoSenha,setTamanhoSenha] = useState(12)

  const gerarSenha = () => {
    const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let novaSenha = ''
    for(let index = 0; index < tamanhoSenha; index++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length)
      novaSenha += caracteres[randomIndex]
    }
    setSenha(novaSenha)
    setBotaoTexto('Copiar')
  
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(senha)
      setBotaoTexto('Copiado!')
  }

  return (
    <div>
      <h1>Gerador de Senhas</h1>
      <div>
        <label htmlFor="tamanhoSenha">Tamanho</label>
        <input 
          type="number" 
          id="tamanhoSenha" 
          min={1}
          value={tamanhoSenha}
          onChange={(event) => setTamanhoSenha(event.target.value)}
        />
      </div>
      <button onClick={gerarSenha}>Gerar Senha</button>
      <button onClick={copyToClipboard}>{botaoTexto}</button>
      <div>{senha}</div>
    </div>
  )
}

export default App
