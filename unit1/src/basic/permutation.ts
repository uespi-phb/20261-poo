import { inputNumber, print } from '../lib/stdio'

print('## VERIFICA PERMUTAÇÃO\n')
const firstNumber = inputNumber('1º número: ')
const secondNumber = inputNumber('2º número: ')

let result: string
if (isPermutation(firstNumber, secondNumber)) {
    result = 'é'
} else {
    result = 'não é'
}
print(`${secondNumber} ${result} uma permutação de ${firstNumber}`)

function countDigits(n: number): number[] {
    const digitCounting = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    do {
        const digit = n % 10
        digitCounting[digit]!++
        n = Math.floor(n / 10)
    } while (n > 0)

    return digitCounting
}

function isPermutation(a: number, b: number): boolean {
    const digitCountingA = countDigits(a)
    const digitCountingB = countDigits(b)

    for (let index in digitCountingA) {
        if (digitCountingA[index] !== digitCountingB[index]) {
            return false
        }
    }
    return true
}
