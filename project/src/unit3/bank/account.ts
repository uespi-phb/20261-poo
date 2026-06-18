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

import type { BankAccount } from './bank-account'
import { formatCurrency, printFormatted, printLine } from './utils'

export class Account implements BankAccount {
  protected balance: number

  constructor(
    public readonly agency: number,
    public readonly number: number,
    public readonly holder: string,
  ) {
    this.balance = 0.0
  }

  accountTypeName(): string {
    return 'CORRENTE'
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

  protected getStatatmentCols(): {
    statementWidth: number
    dateWidth: number
    valueWidth: number
    descWidth: number
    statementCols: string[]
  } {
    const statementWidth = 40
    const dateWidth = 6
    const valueWidth = 12
    const descWidth = statementWidth - dateWidth - valueWidth
    const statementCols = [`<${dateWidth}`, `<${descWidth}`, `>${valueWidth}`]

    return {
      statementWidth,
      dateWidth,
      valueWidth,
      descWidth,
      statementCols,
    }
  }

  statement(): void {
    const cols = this.getStatatmentCols()
    const typeName = this.accountTypeName()

    printFormatted('BANCO EXEMPLO  S/A', [`^${cols.statementWidth}`])
    printFormatted(`EXTRATO DE CONTA ${typeName}`, [`^${cols.statementWidth}`])
    printFormatted(`AG: ${this.agency}\tNO: ${this.number}`, [
      `<${cols.statementWidth / 2}`,
      `>${cols.statementWidth / 2}`,
    ])
    printFormatted(`TITULAR: ${this.holder}`, [`<${cols.statementWidth}`])
    printLine(cols.statementWidth)
    printFormatted('DATA\tDESCRIÇÃO\tVALOR', cols.statementCols)

    const dateCol = '-'.repeat(cols.dateWidth - 1)
    const descCol = '-'.repeat(cols.descWidth - 1)
    const valueCol = '-'.repeat(cols.valueWidth)
    printFormatted(`${dateCol}\t${descCol}\t${valueCol}`, cols.statementCols)

    const today = new Date()
    const date = today.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
    const value = formatCurrency(this.balance)
    printFormatted(`${date}\tSALDO\t${value}`, cols.statementCols)
  }

  show(): void {
    console.log(`Agência: ${this.agency}`)
    console.log(`Conta  : ${this.number}`)
    console.log(`Titular: ${this.holder}`)
    console.log(`Saldo  : ${this.balance}`)
  }
}
