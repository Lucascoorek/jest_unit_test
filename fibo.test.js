const fib = require("./fibo");

test("NaN to be false", () => {
  expect(fib(NaN)).toBeFalsy();
});
test("fib function to be defined", () => {
  expect(fib()).toBeDefined();
});
test("Return [] for 0", () => {
  expect(fib(0)).toEqual([]);
});
test("Return [0] for 1", () => {
  expect(fib(1)).toEqual([0]);
});
test("Return 12 for fib(12).length", () => {
  expect(fib(12).length).toBe(12);
});
