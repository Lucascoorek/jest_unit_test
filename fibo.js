// const fib = (index, cache = []) => {
//   if (isNaN(index)) return false;
//   if (cache[index]) return cache[index];
//   else {
//     if (index < 3) return 1;
//     else {
//       console.log(cache);

//       return (cache[index] = fib(index - 1, cache) + fib(index - 2, cache));
//     }
//   }
// };

// console.log(fib(5));

function fib(n) {
  if (isNaN(n)) return false;
  if (n === 0) return [];
  if (n === 1) return [0];
  else {
    const fibb = [];
    fibb.push(0);
    fibb.push(1);
    for (let i = 2; i < n; i++) fibb.push(fibb[i - 1] + fibb[i - 2]);
    return fibb;
  }
}
console.log(fib(12));

module.exports = fib;
