import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";


export default function App() {
  // const state = useState('Robinson');
  // const name = state[0];
  // const setName = state[1];
  // console.log(state);
  const [name, setName] = useState('Robinson');
  function handleNameChange(event) {
    const newName = event.currentTarget.value;
    setName(newName);
  }

  return (
    <>
      <Header size="large">Componente Header - projeto react-hello large</Header>
      <Header >Componente Header - projeto react-hello normal</Header>
      <Main>
        <div className="flex flex-col my-4">

          <label className="text-sm mb-1" htmlFor="inputName">Digite o seu nome:</label>
          <input 
            autoFocus 
            id="inputName" 
            className="border p-1" 
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <p>
          Olá { name }! Quantidade de caracteres em nome {name.length}
        </p>
      </Main>
    </>
  );
};

// exemplo de utilização de props

// <Test 
// number={10} 
// string="Teste" 
// visible data={{ a:1, b: 2 }} 
// onClick={() => {
//   console.log('Clicou no botão');
// }} 
// />