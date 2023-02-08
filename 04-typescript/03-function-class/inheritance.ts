import { Rectangle } from './rectangle'

class Square extends Rectangle {
  readonly name = 'square'
  side: number

  constructor(side: number) {
    super(side, side)
    this.name = 'square'
  }
}

const sq = new Square(5)
console.log(sq.getArea())
