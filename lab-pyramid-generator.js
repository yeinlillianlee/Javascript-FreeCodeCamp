function pyramid(string, integer, boolean) {
  let result = '';
  let rows = [];

  if (boolean === false) {
    for (let i=1; i<integer+1; i++) {
      rows.push(" ".repeat(integer-i) + string.repeat(i*2-1));
    }
  } else {
    for (let i=1; i<integer+1; i++) {
      rows.push(" ".repeat(i-1) + string.repeat((integer-i+1)*2-1));
    }
  }

  for (let row of rows) {
    result = result + "\n" + row;
  }

  result = result + "\n"

  console.log(result);
  return result;
}

