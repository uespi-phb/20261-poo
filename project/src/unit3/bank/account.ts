/*
class Account {
  public readonly agency: number
  public readonly number: number
  public readonly holder: string
  public readonly balance: number

  constructor(agency: number, number: number, holder: string) {
    this.agency = agency
    this.number = number
    this.holder = holder
    this.balance = 0.0
  }
}
*/

export class Account {
  protected balance: number

  constructor(
    public readonly agency: number,
    public readonly number: number,
    public readonly holder: string,
  ) {
    this.balance = 0.0
  }

  deposit(value: number): void {
    if (value <= 0) throw new Error('invalid transaction value')

    this.balance += value
  }

  withdraw(value: number): void {
    if (value <= 0) throw new Error('invalid transaction value')
    if (value > this.balance) throw new Error('insufficent funds')
    this.balance -= value
  }

  transfer(to: Account, value: number): void {
    this.withdraw(value)
    to.deposit(value)
  }

  statement(): void {}

  show(): void {
    console.log(`Agência: ${this.agency}`)
    console.log(`Conta  : ${this.number}`)
    console.log(`Titular: ${this.holder}`)
    console.log(`Saldo  : ${this.balance}`)
  }
}
