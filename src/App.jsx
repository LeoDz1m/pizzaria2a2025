import { useState } from "react"

function App(){

  const [nome, setNome] = useState('Neymar');

  const Formulario = (props) => {
    return (
      <>
      <h4>Formulario de Inscrição</h4>
      <input className="Nome"
        name = "nome"
        placeholder="Digite seu nome..."
        onChange={(e)=>props.nome= e.target.value)}
        type="text" />
      <button onClick={()=>{
       (props.texto !=null) ? alert(props.texto) : alert(props.nome)
        }}>
        CLIQUE AQUI
      </button>
      </>
    )
  }

  return (
    <div> 
      <h3>Pizzaria 2A</h3>
      <Formulario texto="Obrigado pela reposta" />
      <Formulario texto="Corinthias minha vida"/>
      <Formulario texto="So agradece veinho"/>
      <Formulario nome={nome} />
    </div>
    
  )     
}

export default App