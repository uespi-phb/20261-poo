import { Account } from './account'
import { printFormatted } from './utils'

export class SpecialAccount extends Account {
  public readonly limit: number

  constructor(agency: number, number: number, holder: string, limit: number) {
    super(agency, number, holder)
    this.limit = limit
  }

  availableBalance(): number {
    return this.limit + this.balance
  }

  override statement(): void {
    const cols = this.getStatatmentCols()

    super.statement()

    const limitValue = this.limit.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    const availableValue = this.availableBalance().toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    printFormatted(`\tLIMITE\t${limitValue}`, cols.statementCols)
    printFormatted(`\tDISPONÍVEL\t${availableValue}`, cols.statementCols)
  }

  override show(): void {
    super.show()
    console.log(`Disponv: ${this.availableBalance()}`)
  }
}
