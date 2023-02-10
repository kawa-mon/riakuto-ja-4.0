import { Currency } from './currency-exports'

const dollars: Currency = { unit: 'USD', amount: 100 }

console.log(dollars)
console.log(Currency.exchange(dollars, 'JPY'))
