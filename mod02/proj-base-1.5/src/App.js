import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";


export default function App() {
  /**
   * Renders a React component that displays a header, a main section, and two input components.
   * Manages the state of the name and birthDate variables using the useState hook.
   * Defines event handler functions to update the state variables when the input values change.
   * 
   * @returns {JSX.Element} The rendered React component.
   */
  const [name, setName] = useState('Robinson');
  const [birthDate, setBirthDate] = useState('1974-10-03');

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }

  return (
    <>
      <Header size="large">Componente Header - projeto react-hello</Header>
      <Main>
        <TextInput 
          labelDescription="Digite o seu nome: "
          inputValue={name}
          onInputChange={handleNameChange}
        />
        
        <DateInput 
          labelDescription="Digite a sua data de nascimento: "
          inputValue={birthDate}
          onInputChange={handleBirthDateChange}
        />
        <p>
          Olá { name }! Quantidade de caracteres em nome {name.length}
        </p>
      </Main>
    </>
  );
}

// exemplo de utilização de props

// <Test 
// number={10} 
// string="Teste" 
// visible data={{ a:1, b: 2 }} 
// onClick={() => {
//   console.log('Clicou no botão');
// }} 
// />