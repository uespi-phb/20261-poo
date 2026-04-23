import { input, print } from '../lib/stdio'

const dayOfWeek = input('Informe o código do dia da semana (1-7): ')

let weekDay: string

switch (dayOfWeek) {
    case '1':
        weekDay = 'Domingo'
        break

    case '2':
        weekDay = 'Segunda'
        break

    case '3':
        weekDay = 'Terça'
        break

    case '4':
        weekDay = 'Quarta'
        break

    case '5':
        weekDay = 'Quinta'
        break

    case '6':
        weekDay = 'Sexta'
        break

    case '7':
        weekDay = 'Sábado'
        break

    default:
        weekDay = 'Inválido'
}

print(`${dayOfWeek} = ${weekDay}`)
