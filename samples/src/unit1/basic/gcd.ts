import { inputNumber, print } from '../lib/stdio'
/*
1) MDC(a,0) = a
2) MDC(a,b) = MDC(b,a)
3) MDC(a,b) = MDC(b, a mod b), se a >= b
*/
function gcd(a: number, b: number): number {
    let t: number

    while (b != 0) {
        if (a >= b) {
            t = a
            a = b
            b = t % b
        } else {
            t = a
            a = b
            b = t
        }
    }
    return a
}

print('## CÁLCULO DO MDC ##\n')
const x = inputNumber('1º número: ')
const y = inputNumber('2º número: ')
const result = gcd(x, y)
print(`MDC(${x},${y}) = ${result}`)
