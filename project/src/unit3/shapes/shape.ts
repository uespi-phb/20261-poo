export abstract class Shape {
  public readonly name: string

  constructor(name: string) {
    this.name = name
  }

  compareTo(shape: Shape): number {
    return this.area() - shape.area()
  }

  abstract area(): number
  abstract perimeter(): number
}

/*
interface Comparable {
  compareTo(shape: Shape): number
}

export abstract class Shape implements Comparable {
  public readonly name: string

  constructor(name: string) {
    this.name = name
  }

  compareTo(shape: Shape): number {
    return this.area() - shape.area()
  }

  abstract area(): number
  abstract perimeter(): number
}
*/
