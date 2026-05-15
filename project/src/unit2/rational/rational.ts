type Fraction = {
  num: number
  den: number
}

class Rational {
  public readonly num: number
  public readonly den: number

  constructor(num: number = 0, den: number = 1) {
    let f: Fraction

    this.validate(num, den)

    f = this.checkSignal(num, den)
    f = this.simplify(f.num, f.den)

    this.num = f.num
    this.den = f.den
  }

  private validate(num: number, den: number): void {
    if (den === 0) throw new Error('denominator cannot be zero')
    if (!Number.isInteger(num)) throw new Error('numerator must be integer')
    if (!Number.isInteger(den)) throw new Error('denominator must be integer')
  }

  private checkSignal(num: number, den: number): Fraction {
    if (den < 0) {
      num = -num
      den = -den
    }
    return {
      num,
      den,
    }
  }

  private simplify(num: number, den: number): Fraction {
    let div = 2

    while (div <= Math.min(Math.abs(num), Math.abs(den))) {
      if (num % div === 0 && den % div === 0) {
        num = num / div
        den = den / div
      } else {
        div++
      }
    }
    return {
      num,
      den,
    }
  }

  toString(): string {
    return `${this.num}/${this.den}`
  }

  add(other: Rational): Rational {
    const num = this.num * other.den + this.den * other.num
    const den = this.den * other.den
    return new Rational(num, den)
  }

  sub(other: Rational): Rational {
    const num = this.num * other.den - this.den * other.num
    const den = this.den * other.den
    return new Rational(num, den)
  }

  mul(other: Rational): Rational {
    return new Rational(this.num * other.num, this.den * other.den)
  }

  div(other: Rational): Rational {
    return new Rational(this.num * other.den, this.den * other.num)
  }
}

const r1 = new Rational()
const r2 = new Rational(5)
const r3 = new Rational(5, 3)
const r4 = new Rational(-2, 5)

const radd = r3.add(r4)
const rsub = r3.sub(r4)
const rmul = r3.mul(r4)
const rdiv = r3.div(r4)

console.log('r1 =', r1.toString())
console.log('r2 =', r2.toString())
console.log('r3 =', r3.toString())
console.log('r4 =', r4.toString())

console.log('r3 + r4 =', radd.toString())
console.log('r3 - r4 =', rsub.toString())
console.log('r3 x r4 =', rmul.toString())
console.log('r3 : r4 =', rdiv.toString())
