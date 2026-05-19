import { Rational } from './rational'

export class RationalSet {
  private readonly data: Rational[]

  constructor() {
    this.data = []
  }

  toString(): string {
    let result = '{'

    for (let i = 0; i < this.data.length; i++) {
      const r = this.data[i]!
      result += r.toString()
      if (i < this.data.length - 1) {
        result += ', '
      }
    }
    result = result + '}'

    return result
  }

  add(r: Rational): void {
    for (const elem of this.data) {
      if (r.equals(elem)) return
    }
    this.data.push(r)
  }
}
