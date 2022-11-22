function fibsRec(n) {
  if (n < 1) {
    return null;
  }
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
  }
}

console.log(fibsRec(20));
