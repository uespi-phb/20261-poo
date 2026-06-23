import { Ellipse } from './ellipse'

export class Circle extends Ellipse {
  constructor(radius: number, name: string = 'Circle') {
    super(radius, radius, name)
  }
}
