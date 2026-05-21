import { Rational } from './rational'

function isRationalArray(array: unknown[]): boolean {
  return array.length === 0 || array[0] instanceof Rational
}

function isNumberArray(array: unknown[]): boolean {
  return array.length === 0 || typeof array[0] === 'number'
}

export class RationalSet {
  private readonly data: Rational[]

  constructor(source?: RationalSet | number[] | Rational[]) {
    if (source === undefined) {
      this.data = []
      return
    }
    if (source instanceof RationalSet) {
      this.data = [...source.data]
    } else if (isRationalArray(source)) {
      this.data = [...(source as Rational[])]
    } else {
      this.data = (source as number[]).map((num) => new Rational(num, 1))
    }
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

  show(setName?: string): void {
    if (setName) {
      console.log(`${setName} = ${this.toString()}`)
    } else {
      console.log(this.toString())
    }
  }

  constains(r: Rational): boolean {
    for (const elem of this.data) {
      if (r.equals(elem)) return true
    }
    return false
  }

  add(r: Rational): void {
    if (this.constains(r)) return
    this.data.push(r)
  }

  remove(r: Rational): void {
    for (let i = 0; i < this.data.length; i++) {
      if (r.equals(this.data[i]!)) {
        this.data.splice(i, 1)
        break
      }
    }
  }

  union(other: RationalSet): RationalSet {
    const unionSet = new RationalSet(this)
    for (const elem of other.data) {
      unionSet.add(elem)
    }
    return unionSet
  }

  intersection(other: RationalSet): RationalSet {
    const intersectionSet = new RationalSet()
    for (const elem of this.data) {
      if (other.constains(elem)) {
        intersectionSet.add(elem)
      }
    }
    return intersectionSet
  }

  difference(other: RationalSet): RationalSet {
    const diffSet = new RationalSet()
    for (const elem of this.data) {
      if (!other.constains(elem)) {
        diffSet.add(elem)
      }
    }
    return diffSet
  }
}
