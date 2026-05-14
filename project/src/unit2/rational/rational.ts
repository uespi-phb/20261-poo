class Rational {
  public readonly num: number
  public readonly den: number

  constructor(num: number = 0, den: number = 1) {
    this.num = num
    this.den = den
  }
}

const r1 = new Rational()
const r2 = new Rational(5)
const r3 = new Rational(5, 3)

console.log(r1)
console.log(r2)
console.log(r3)
