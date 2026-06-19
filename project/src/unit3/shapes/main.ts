import { Triangle } from './triangle'

const shapes = [new Triangle(3, 4, 5, 'T1'), new Triangle(4, 6, 8, 'T2'), new Triangle(5, 7, 9, 'T3')]

for (const shape of shapes) {
  console.log(shape.name)
  console.log(`  perimeter: ${shape.perimeter().toFixed(2)}`)
  console.log(`  area     : ${shape.area().toFixed(2)}`)
}
