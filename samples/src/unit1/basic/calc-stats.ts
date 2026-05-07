import { inputNumber, print } from '../lib/stdio'

print('Digite uma sequência de números e termine com ENTER:\n')

let countNumbers: number = 0
let countEven: number = 0
let sumNumbers: number = 0

do {
    const number = inputNumber()
    if (Number.isNaN(number)) {
        break
    }

    countNumbers++

    if (number % 2 === 0) {
        countEven++
    }

    sumNumbers += number
} while (true)

const countOdd = countNumbers - countEven

print(`Média  : ${sumNumbers / countNumbers}`)
print(`Pares  : ${countEven} (${(countEven / countNumbers) * 100}%)`)
print(`Ímpares: ${countOdd} (${(countOdd / countNumbers) * 100}%)`)
