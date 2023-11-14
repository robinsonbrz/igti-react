import { getBackend } from "./api/api"

const backend = getBackend()
export default function App() {
  console.log('Teste no console do navegador')
  // console.log('backend: ', backend)

  return (
    <div>
      <header>
        <div className="bg-gray-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            Projeto base para o Desafio 02 módulo 02
          </h1>
        </div>
      </header>

      <main>
        <pre>{JSON.stringify(backend, null, 2)}</pre>
        <div className="container mx-auto p-4">
          <h2>O conteúdo fica aqui.</h2>
        </div>
      </main>
    </div>
  )
}
