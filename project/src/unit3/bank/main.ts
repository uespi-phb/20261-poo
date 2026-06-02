import { Account } from './account'
import { SpecialAccount } from './special-account'

const accounts = [
  new Account(123, 102033, 'Ana Barros'),
  new Account(123, 763201, 'Paulo Penteado'),
  new SpecialAccount(123, 656128, 'Pedro Portela', 1000.0),
  new SpecialAccount(123, 453292, 'Carlos Pereira', 500.0),
]

for (const account of accounts) {
  account.show()
  console.log('----')
}
