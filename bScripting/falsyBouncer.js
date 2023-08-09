function bouncer(arr) {
  const result = [];
  arr.map((item) => {
    if (Boolean(item)) {
      result.push(item);
    }
  });
  return result;
}

console.log(bouncer([7, "ate", "", false, 9]));
