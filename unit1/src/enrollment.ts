import * as fs from 'node:fs'
import { print, input, clearScreen } from './stdio'

const enrollDataFileName = 'participantes.txt'

type EnrollmentRecord = {
  name: string
  email: string
  city: string
}

function dataAppend(line: string): void {
  const fd = fs.openSync(enrollDataFileName, 'a')
  fs.writeSync(fd, line)
  fs.closeSync(fd)
}

function dataRead(): EnrollmentRecord[] {
  const buffer = fs.readFileSync(enrollDataFileName).toString()
  const lines = buffer.split('\n').filter((line: string) => line.trim() !== '')
  return lines.map((line: string) => {
    const data = line.split(';')
    return {
      name: data[0]!,
      email: data[1]!,
      city: data[2]!,
    }
  })
}

function mainMenu(): string {
  let option: string

  do {
    clearScreen()
    print('  1. Cadastrar Participante\n')
    print('  2. Listar Participantes\n')
    print('  3. Buscar Participante\n')
    print('  4. Participantes por Cidade\n')
    print('  0. Finalizar\n')
    option = input('> ')
  } while (option < '0' || option > '4')
  return option
}

function main(): void {
  let option: string
  do {
    option = mainMenu()
    switch (option) {
      case '1':
        enrollmentAdd()
        break

      case '2':
        enrollmentList()
        break

      case '3':
        enrollmentSearch()
        break

      case '4':
        enrollmentListPerCity()
        break
    }
  } while (option !== '0')
}

function enrollmentAdd() {
  clearScreen()

  print('## CADASTRO DE PARTICIPANTE\n\n')

  const name = input('Nome\t: ')
  const email = input('Email\t: ')
  const city = input('City\t: ')

  dataAppend(`${name};${email};${city}\n`)
}

function enrollmentList() {
  print('## LISTA DE PARTICIPANTES\n\n')

  for (const enrollment of dataRead()) {
    print(`${enrollment.name}\t${enrollment.email}\t${enrollment.city}\n`)
  }

  input('Tecle ENTER para continuar')
}

function enrollmentSearch() {
  throw new Error('Function not implemented.')
}

function enrollmentListPerCity() {
  throw new Error('Function not implemented.')
}

//
// Entrypoint
//
main()
