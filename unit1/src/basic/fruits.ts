import { print } from '../lib/stdio'

const fruits = ['Laranja', 'Banana', 'Maçã', 'Goiaba', 'Uva', 'Jaca', 'Melancia']

print('for: tipo 1')
for (let i = 0; i < fruits.length; i++) {
    print(`${i}: ${fruits[i]}`)
}

print('\nfor: tipo 2')
let index = 0
for (let fruit of fruits) {
    print(`${index++}: ${fruit}`)
}

print('\nfor: tipo 3')
for (let index in fruits) {
    print(`${index}: ${fruits[index]}`)
}
