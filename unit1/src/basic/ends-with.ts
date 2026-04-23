import { inputNumber, print } from '../lib/stdio'

function numberEndsWith(refNumber: number, endsNumber: number): boolean {
    const refString = refNumber.toString()
    const endsString = endsNumber.toString()

    return refString.endsWith(endsString)
}

print('# NÚMERO TERMINA COM OUTRO NÚMERO?\n')

const firstNumber = inputNumber('1º Número: ')
const secondNumber = inputNumber('2º Número: ')

let result: string
if (numberEndsWith(firstNumber, secondNumber)) {
    result = 'termina'
} else {
    result = 'não termina'
}

print(`${firstNumber} ${result} com ${secondNumber}`)
