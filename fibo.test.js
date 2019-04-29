const fib = require("./fibo");

test("Return false for NaN parameter", () => {
  expect(fib(NaN)).toBeFalsy();
});
test("Return [] for fib(0)", () => {
  expect(fib(0)).toEqual([]);
});
test("Return [0] for fib(1)", () => {
  expect(fib(1)).toEqual([0]);
});
test("Return [0,1,1,2,3,5,8] for fib(7)", () => {
  expect(fib(7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
});
test("Return 12 for fib(12).length", () => {
  const result = fib(12);
  expect(result.length).toBe(12);
});
