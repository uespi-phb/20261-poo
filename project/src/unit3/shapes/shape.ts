export abstract class Shape {
  public readonly name: string

  constructor(name: string) {
    this.name = name
  }

  abstract area(): number
  abstract perimeter(): number
}
