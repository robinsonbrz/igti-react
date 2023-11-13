import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getPercentage({ initialValue, finalValue }) {
  return finalValue / initialValue - 1
}

export function getMonthDescription(monthNumber) {
  const MONTHS = [
    null,
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ]

  return MONTHS[monthNumber] ?? '???'
}

export function formatMoney(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export function formatPercent(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export function formatPercetForInvestments(value) {
  const formattedValue = formatPercent(value)
  return value > 0 ? `+${formattedValue}` : formattedValue
}
