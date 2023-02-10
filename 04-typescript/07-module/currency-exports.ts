const rate = {
  USD: 1,
  EUR: 0.9,
  JPY: 108,
  GBP: 0.8,
} as const

type Unit = keyof typeof rate
interface Currency {
  unit: Unit
  amount: number
}

const Currency = {
  exchange: (currency: Currency, unit: Unit): Currency => {
    const amount = (currency.amount / rate[currency.unit]) * rate[unit]

    return { unit, amount }
  },
}

export { Currency }
