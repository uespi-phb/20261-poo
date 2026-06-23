import { Shape } from './shape'

export class Rectangle extends Shape {
  public readonly width: number
  public readonly heigth: number

  constructor(width: number, height: number, name: string = 'Rectangle') {
    super(name)
    this.width = width
    this.heigth = height
  }

  override area(): number {
    return this.heigth * this.width
  }

  override perimeter(): number {
    return 2 * (this.heigth + this.width)
  }
}
