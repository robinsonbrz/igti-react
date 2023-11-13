import {
  cn,
  formatMoney,
  formatPercetForInvestments,
  getMonthDescription,
  getPercentage,
} from '../utils/utils'

export function Investment({ children }) {
  const { investment, reports } = children

  const firstReport = reports[0]
  // const lastReport = reports[reports.length - 1]
  const lastReport = reports.at(-1)

  const firstValue = firstReport.value
  const lastValue = lastReport.value
  const totalValue = lastValue - firstValue
  const percentage = getPercentage({
    finalValue: lastValue,
    initialValue: firstValue,
  })

  const colorClassName =
    percentage === 0
      ? 'text-gray-900 font-semibold'
      : percentage > 0
      ? 'text-green-600 font-semibold'
      : 'text-red-600 font-semibold'

  return (
    <div className="m-4 p-4 border">
      <h2 className="text-center font-semibold text-xl">
        {investment.description}
      </h2>

      <h3 className="text-center font-semibold text-lg">
        Rendimento total:{' '}
        <span className={colorClassName}>
          {formatMoney(totalValue)} ({formatPercetForInvestments(percentage)})
        </span>
      </h3>

      <ul className="mt-4">
        {reports.map((report, index) => {
          const { id, value, year, month } = report

          const percentage =
            index === 0
              ? 0
              : getPercentage({
                  initialValue: reports[index - 1].value,
                  finalValue: value,
                }).toFixed(2)

          const colorClassName =
            percentage === 0
              ? 'text-gray-900 font-semibold'
              : percentage > 0
              ? 'text-green-600 font-semibold'
              : 'text-red-600 font-semibold'

          return (
            <li
              key={id}
              className="flex flex-row items-center justify-between border-b p-1"
            >
              <span
                className={cn(
                  'font-mono text-blue-600 text-xl',
                  'text-orange-600'
                )}
              >
                {getMonthDescription(month)}/{year}
              </span>

              <span className={cn('flex-1 ml-4', colorClassName)}>
                {formatMoney(value)}
              </span>

              <span className={colorClassName}>
                {formatPercetForInvestments(percentage)}
              </span>
            </li>
          )
        })}
      </ul>

      <button>Click</button>
    </div>
  )
}
