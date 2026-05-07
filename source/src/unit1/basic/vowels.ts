import { input, print } from '../lib/stdio'

/*
Escreva um programa que leia uma string pelo teclado
e calcule a quantidade de vogais
*/

const text = input('Digite um texto: ')
let vowelCount = 0

for (let char of text.split('')) {
    const vowels = 'aeiou'
    const lowerChar = char.toLowerCase()

    if (vowels.includes(lowerChar)) {
        vowelCount++
    }

    // if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
    //   vowelCount++
    // }
}

print(`O text possui ${vowelCount} vogais.`)
