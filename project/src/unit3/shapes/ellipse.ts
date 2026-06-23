import { Shape } from './shape'

export class Ellipse extends Shape {
  public readonly majorSemiAxis: number
  public readonly minorSemiAxis: number

  constructor(minor: number, major: number, name: string = 'Ellipse') {
    super(name)
    this.minorSemiAxis = minor
    this.majorSemiAxis = major
  }

  override area(): number {
    return 2 * Math.PI * this.minorSemiAxis * this.majorSemiAxis
  }

  override perimeter(): number {
    const value = this.minorSemiAxis ** 2 + this.majorSemiAxis ** 2
    return 2 * Math.PI * Math.sqrt(value / 2)
  }
}
