import { Rectangle } from './rectangle'

export class Square extends Rectangle {
  constructor(edge: number, name: string = 'Square') {
    super(edge, edge, name)
  }
}
