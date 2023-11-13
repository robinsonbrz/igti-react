import { getBackend } from './api/api'
import { Header } from './components/Header'
import { Investment } from './components/Investment'
import { Main } from './components/Main'

const backend = getBackend()

export default function App() {
  const { investments, reports } = backend

  return (
    <>
      <Header>
        <h1>react-investments</h1>
      </Header>

      <Main>
        <ul>
          {investments
            .sort((a, b) => a.description.localeCompare(b.description))
            .map(investment => {
              const { id } = investment

              const filteredReports = reports
                .filter(report => {
                  return report.investmentId === id
                })
                .sort((a, b) => {
                  // console.log(`comparando ${a.month} com ${b.month}`)
                  return a.month - b.month
                })

              return (
                <li key={id}>
                  <Investment>
                    {{ investment, reports: filteredReports }}
                  </Investment>
                </li>
              )
            })}
        </ul>
      </Main>
    </>
  )
}
