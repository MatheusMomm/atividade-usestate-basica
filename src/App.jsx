import { useState } from 'react'
import './App.css'



function Contador(){
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador+1);
  }

  return (
    <div>
        <p>Valor atual: {contador}</p>
        <button onClick={aumentar}>Aumentar</button>
    </div>
  )
};


function Aviso() {
  const [visivel, setVisivel] = useState(false);

  return (
    <>
      <hr/>
      <button onClick={() => setVisivel(!visivel)}>
        Alternar aviso
      </button>

      {visivel && <p>O aviso está visível.</p>}
    </>
  );
}

function Saudacao() {
  const [nome, setNome] = useState("");

  return (
    <>
      <hr />
      <input
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Digite seu nome"
      />

      <p>Olá, {nome || "visitante"}!</p>
          </>
  );
}


function Desafio() {
  const [desafio, setDesafio] = useState(false);
  const [nome, setNome] = useState("");

  return (
    <>
      <hr />

      <button onClick={() => setDesafio(!desafio)}>
        Alternar campo
      </button>

      {desafio && (
        <input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Digite seu nome"
        />
      )}

      {desafio && <p>Olá, {nome || "visitante"}!</p>}
    </>
  );
}

function Extra() {
  const [extra, setExtra] = useState(0);

  function aumentar() {
    setExtra((anterior) => {
      if (anterior === 10) {
        return anterior;
      }

      return anterior + 1;
    });
  }

  return (
    <div>
      <p>Valor atual: {extra}</p>

      <button onClick={aumentar}>
        Aumentar
      </button>

      {extra === 10 && <p>Meta atingida!</p>}

      <button onClick={() => setExtra(0)}>
        Voltar a zero
      </button>
    </div>
  );
}



function App() {

  return (
    <>
      <Contador/>
      <Aviso/>
      
      <Saudacao/>
      
      <Desafio/>
      <Extra/>
    </>
  )
}

export default App
