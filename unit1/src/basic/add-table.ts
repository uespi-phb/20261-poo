import { inputNumber, print } from '../lib/stdio'

print('TABUADA DE ADIÇÃO')

const number = inputNumber('Tabuada de: ')

for (let k = 1; k <= 10; k++) {
    print(`${k} + ${number} = ${number + k}`)
}
