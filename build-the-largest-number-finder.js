function largestOfAll(arrays) {
  let newArr = [];
  for (let i=0; i<arrays.length; i++) {
    let largestNum = -Infinity;
    for (let j=0; j<arrays[i].length; j++) {
      if (arrays[i][j] > largestNum) {
        largestNum = arrays[i][j];
      }
    }
    newArr.push(largestNum);
  }
  return newArr;
}

console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))

