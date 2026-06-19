import { Shape } from './shape'

export class Triangle extends Shape {
  private readonly edges: [number, number, number]

  constructor(edge1: number, edge2: number, edge3: number, name: string = 'Triangle') {
    super(name)

    this.validate(edge1, edge2, edge3)
    this.edges = [edge1, edge2, edge3]
  }

  validate(edge1: number, edge2: number, edge3: number): void {
    if (edge1 + edge2 <= edge3 || edge1 + edge3 <= edge2 || edge2 + edge3 <= edge1)
      throw new Error('Invalid triangle edges')
  }

  area(): number {
    const p = this.perimeter() / 2
    const v = p * (p - this.edges[0]) * (p - this.edges[1]) * (p - this.edges[2])
    return Math.sqrt(v)
  }

  perimeter(): number {
    return this.edges[0] + this.edges[1] + this.edges[2]
  }
}
