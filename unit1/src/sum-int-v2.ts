import { inputNumber } from './stdio'

let number: number
let sum: number

const maxNumber = inputNumber('Digite N: ')

sum = ((1 + maxNumber) * maxNumber) / 2

console.log(`A soma de 1 até ${maxNumber} é ${sum}`)
