import { Rational } from './rational'
import { RationalSet } from './rational-set'

const r = [
  new Rational(-1, 4),
  new Rational(5, 2),
  new Rational(-1, 2),
  new Rational(-4, 7),
  new Rational(8, 3),
  new Rational(1, 8),
]

const s0 = new RationalSet(r)
s0.show('s0')

const s1 = new RationalSet()
s1.add(new Rational(-1, 4))
s1.add(new Rational(5, 2))
s1.add(new Rational(8, 3))

const s2 = new RationalSet()
s2.add(new Rational(-1, 2))
s2.add(new Rational(-4, 7))
s2.add(new Rational(8, 3))
s2.add(new Rational(1, 8))

const s3 = new RationalSet([7, 9, 4, -5, 2])
s3.show('s3')

s1.show('s1')
s2.show('s2')

const u = s1.union(s2)
u.show('s1 U s2')

const i = s1.intersection(s2)
i.show('s1 ^ s2')

const d1 = s1.difference(s2)
d1.show('s1 - s2')

const d2 = s2.difference(s1)
d2.show('s2 - s1')
