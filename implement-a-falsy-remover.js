function bouncer(array) {
  let copyArray = [...array];
  let result = [];

  for (let i=0; i<copyArray.length; i++) {
    if (copyArray[i] === false || copyArray[i] === null || copyArray[i] === 0 || copyArray[i] === "" || copyArray[i] === undefined || Number.isNaN(copyArray[i]) === true) {
      delete copyArray[i];
    } else {
      result.push(copyArray[i])
    }
  }

  return result;
}

