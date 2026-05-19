import { Rational } from './rational'
import { RationalSet } from './rational-set'

const s1 = new RationalSet()

s1.add(new Rational(-1, 4))
s1.add(new Rational(5, 2))
s1.add(new Rational(8, 3))
s1.add(new Rational(5, 2))

console.log(s1.toString())
