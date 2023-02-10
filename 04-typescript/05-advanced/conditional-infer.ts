type Each<T> = T extends Array<infer U> ? U : T

const num = 5
const arr = [3, 6, 9]
type ArrEach = Each<typeof arr>
type NumEach = Each<typeof num>
