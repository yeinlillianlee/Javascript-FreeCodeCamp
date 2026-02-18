function repeatStringNumTimes(string, number) {
  let array = [];
  for(let i=1; i<=number; i++) {
    if (i<=0) {
      return ''
    }

    if (i>=0) {
      array.push(string);
    }
  }
  return array.join('');
}

console.log(repeatStringNumTimes("*", 3));
