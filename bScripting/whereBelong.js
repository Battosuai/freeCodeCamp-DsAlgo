function getIndexToIns(arr, num) {
  let result = -1;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      result = i;
      break;
    }
  }
  return result === -1 ? arr.length : result;
}

console.log(getIndexToIns([40, 60], 50));

// let getIndexToIns = (arr, num) =>
//   arr.reduce((acc, current) => (num > current ? ++acc : acc), 0);
