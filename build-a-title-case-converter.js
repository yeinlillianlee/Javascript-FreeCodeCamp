function titleCase(string) {
  let result = [];
  let words = [];

  words = string.split(" ");

  for (let word of words) {
    word = word.split("");
    for (let i=0; i<word.length; i++) {
      if (i === 0) {
        word[i] = word[i].toUpperCase();
      } else if (i !== 0) {
        word[i] = word[i].toLowerCase();
      }
    }
    word = word.join("");
    result.push(word);
  }
  result = result.join(" ");
  console.log(result);
  return result;
}

titleCase("I like to code")
titleCase("sHoRt AnD sToUt")

