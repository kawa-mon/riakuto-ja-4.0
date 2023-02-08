{
  interface NumOp {
    (n: number, m: number): number
  }

  const add: NumOp = function (n, m) {
    return n + m
  }
  const subtract: NumOp = (n, m) => n - m

  console.log(add(1, 2), subtract(7, 2))
}
