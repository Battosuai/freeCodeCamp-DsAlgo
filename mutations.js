function mutation(arr) {
  const mySet = new Set();
  for (let i = 0; i < arr[0].length; i++) {
    mySet.add(arr[0][i].toLowerCase());
  }
  let result = true;
  for (let i = 0; i < arr[1].length; i++) {
    if (!mySet.has(arr[1][i].toLowerCase())) {
      result = false;
      break;
    }
  }
  return result;
}

console.log(mutation(["hello", "hey"]));

// function test(string, substring) {
//     var letters = [...string];
//     return [...substring].every(x => {
//         var index = letters.indexOf(x);
//         if (~index) {
//             letters.splice(index, 1);
//             return true;
//         }
//     });
// }
