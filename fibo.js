const fib = n => {
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
};
module.exports = fib;
