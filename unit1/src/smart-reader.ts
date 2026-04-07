/*
  Leitor de Frase Inteligente
    Escreva um programa que analise uma frase e retorne:
    - quantidade de vogais
    - quantidade de consoantes
    - quantidade de palavras
    - palavra mais longa
    - frase invertida

  Objetivos técnicos: 
    strings, laços, funções, separação de tokens, filtragem de caracteres.
  
  Desafio extra: 
    ignorar pontuação e normalizar acentuação.
*/

import { input, print } from './stdio'

function isAlpha(char: string): boolean {
  const code = char.toLowerCase().charCodeAt(0)
  return code >= 97 && code <= 122
}

function isVowel(char: string): boolean {
  char = char.toLowerCase()
  return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'
}

function isConsonant(char: string): boolean {
  return isAlpha(char) && !isVowel(char)
}

function isDigit(char: string): boolean {
  const code = char.charCodeAt(0)
  return code >= 48 && code <= 57
}

function isBlank(char?: string): boolean {
  return char === ' ' || char === '\n' || char === '\t' || char === '\r'
}

function wordCount(text: string): number {
  let wordCounter = 0

  for (let i = 0; i < text.length; ) {
    while (isBlank(text[i]) && i < text.length) {
      i++
    }
    wordCounter++
    while (!isBlank(text[i]) && i < text.length) {
      i++
    }
  }

  return wordCounter
}

function splitWords(text: string): string[] {
  const words: string[] = []
  const tokens = text.split(/ |\n|\r|\t/)

  for (let word of tokens) {
    if (word.length > 0) {
      words.push(word)
    }
  }

  return words
}

function main() {
  const text = input('Texto: ')
  let vowelCount = 0
  let consonantCount = 0

  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i) // text[i]

    if (isVowel(char)) {
      vowelCount++
    } else if (isConsonant(char)) {
      consonantCount++
    }
  }

  const words = splitWords(text)
  print(words)
  const wordCount = words.length

  let longestWord = words[0]!
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }

  print(`Qtde de vogais\t\t: ${vowelCount}`)
  print(`Qtde de consoantes\t: ${consonantCount}`)
  print(`Qtde de palavras\t: ${wordCount}`)
  print(`Palavra mais longa\t: ${longestWord}`)
}

main()
