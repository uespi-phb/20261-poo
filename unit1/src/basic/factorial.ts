import { inputNumber, print } from '../lib/stdio'

function factorial(n: number): number {
    let product = 1

    for (let k = 1; k <= n; k++) {
        product = product * k
    }

    return product
}

print('## CÁLCULO DO FATORIAL ##\n')
const number = inputNumber('Informe um número: ')
const nFactorial = factorial(number)
print(`${number}! = ${nFactorial}`)
