import { input, print } from './stdio'

const firstNumber = parseInt(input('1º número: '))
const secondNumber = parseInt(input('2º número: '))

if (firstNumber > secondNumber) {
  print(`${firstNumber} é maior que ${secondNumber}`)
} else if (firstNumber < secondNumber) {
  print(`${secondNumber} é maior que ${firstNumber}`)
} else {
  print(`${firstNumber} é igual a ${secondNumber}`)
}
