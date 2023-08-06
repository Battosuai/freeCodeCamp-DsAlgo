function titleCase(str) {
  const strArray = str.split(" ");
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] =
      strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1).toLowerCase();
  }
  return strArray.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
