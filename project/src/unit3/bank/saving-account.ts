import { Account } from './account'
import { formatCurrency, printFormatted } from './utils'

export class SavingAccount extends Account {
  public readonly interestRate = 0.005

  override accountTypeName(): string {
    return 'POUPANÇA'
  }

  interest(): number {
    return this.balance * this.interestRate
  }

  availableBalance(): number {
    return this.balance + this.interest()
  }

  override statement(): void {
    super.statement()

    const cols = this.getStatatmentCols()
    let value = formatCurrency(this.interest())
    printFormatted(`\tJUROS\t${value}`, cols.statementCols)

    value = formatCurrency(this.availableBalance())
    printFormatted(`\tDISPONÍVEL\t${value}`, cols.statementCols)
  }
}
