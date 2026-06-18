import { Account } from './account'
import type { BankAccount } from './bank-account'
import { formatCurrency, printFormatted } from './utils'

export class SpecialAccount extends Account {
  public readonly limit: number

  constructor(agency: number, number: number, holder: string, limit: number) {
    super(agency, number, holder)
    this.limit = limit
  }

  override accountTypeName(): string {
    return 'ESPECIAL'
  }

  availableBalance(): number {
    return this.limit + this.balance
  }

  override statement(): void {
    const cols = this.getStatatmentCols()

    super.statement()

    const limitValue = formatCurrency(this.limit)
    const availableValue = formatCurrency(this.availableBalance())
    printFormatted(`\tLIMITE\t${limitValue}`, cols.statementCols)
    printFormatted(`\tDISPONÍVEL\t${availableValue}`, cols.statementCols)
  }

  override show(): void {
    super.show()
    console.log(`Disponv: ${this.availableBalance()}`)
  }
}
