import { Account } from './account'
import { SavingAccount } from './saving-account'
import { SpecialAccount } from './special-account'
import { formatLine } from './utils'

const accounts = [
  new Account(123, 102033, 'Ana Barros Bragança'),
  new Account(123, 763201, 'Paulo Penteado'),
  new SpecialAccount(123, 656128, 'Pedro Portela', 1000.0),
  new SpecialAccount(123, 453292, 'Carlos Pereira', 500.0),
  new SavingAccount(123, 89450, 'Chico Buarque'),
  new SavingAccount(123, 74522, 'Maria Betânia'),
]

accounts[0]?.statement()
console.log('\n=============\n')
accounts[2]?.statement()
console.log('\n=============\n')
accounts[4]?.deposit(10000.0)
accounts[4]?.statement()
