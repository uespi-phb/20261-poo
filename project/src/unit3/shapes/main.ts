import { Circle } from './circle'
import { Ellipse } from './ellipse'
import { Rectangle } from './rectangle'
import type { Shape } from './shape'
import { Square } from './square'
import { Triangle } from './triangle'

function showShapes(shapes: Shape[]): void {
  for (const shape of shapes) {
    console.log(shape.name)
    console.log(`  perimeter: ${shape.perimeter().toFixed(2)}`)
    console.log(`  area     : ${shape.area().toFixed(2)}`)
  }
}

const shapes: Shape[] = [
  new Triangle(3, 4, 5, 'T1'),
  new Rectangle(5, 8, 'R1'),
  new Triangle(4, 6, 8, 'T2'),
  new Square(4, 'S1'),
  new Triangle(5, 7, 9, 'T3'),
  new Ellipse(3, 6, 'E1'),
  new Circle(3, 'C1'),
]

showShapes(shapes)

console.log('------------------')
shapes.sort((s1: Shape, s2: Shape) => s1.compareTo(s2))

showShapes(shapes)
