export default function App() {
  console.log('Teste no console do navegador')

  const name = 'Robinson';

  return (
    <div>
      <header>
        <div className="bg-green-300 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            React Hello
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4">
          <p>
            Olá {name}! Quantidade de caracteres em nome {name.length} 
          </p>
        </div>
      </main>
    </div>
  )
}
