function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const mid = Math.round(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  //console.log(left, right);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(l, r) {
  let result = [];
  while (l.length > 0 && r.length > 0) {
    if (l[0] > r[0]) {
      result.push(r.shift());
    } else {
      result.push(l.shift());
    }
  }
  while (l.length > 0) {
    result.push(l.shift());
  }
  while (r.length > 0) {
    result.push(r.shift());
  }
  return result;
}

console.log(mergeSort([9, 5, 9, 4, 3, 1, 5, 6, 3, 8]));
