import Header from "./components/Header";
import Main from "./components/Main";


export default function App() {
  console.log('Teste no console do navegador');

  // const name = 'Robinson';

  return (
    <>
      <Header size="large">Componente Header - projeto react-hello large</Header>
      <Header >Componente Header - projeto react-hello normal</Header>
      <Main>
        <p>
          Olá Robinson! Quantidade de caracteres em nome 8 
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