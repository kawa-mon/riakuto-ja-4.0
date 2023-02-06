const counter =
  (count = 0) =>
  (add = 1) =>
    (count += add)

const increment = counter()
console.log(increment())
console.log(increment())
console.log(increment(2))
