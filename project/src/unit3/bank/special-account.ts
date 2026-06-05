import { Account } from './account'

export class SpecialAccount extends Account {
  public readonly limit: number

  constructor(agency: number, number: number, holder: string, limit: number) {
    super(agency, number, holder)
    this.limit = limit
  }

  availableBalance(): number {
    return this.limit + this.balance
  }

  override show(): void {
    super.show()
    console.log(`Disponv: ${this.availableBalance()}`)
  }
}
