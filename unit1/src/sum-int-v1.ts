import { inputNumber } from './stdio'

let number: number
let sum: number

const maxNumber = inputNumber('Digite N: ')

sum = 0
number = 1
while (number <= maxNumber) {
  sum = sum + number
  number++
}

console.log(`A soma de 1 até ${maxNumber} é ${sum}`)
