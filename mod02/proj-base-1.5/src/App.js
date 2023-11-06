import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  console.log('Teste no console do navegador');

  const name = 'Robinson';

  return (
    <>
      <Header size="large">Componente Header - projeto react-hello large</Header>
      <Header >Componente Header - projeto react-hello normal</Header>
      <Main>

          <div className="container mx-auto p-4">
            <p>
              Olá Robinson! Quantidade de caracteres em nome 8 
            </p>
          </div>

      </Main>

    </>
  );
};
