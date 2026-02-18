let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property) {
  let result;

  for (let i=0; i<=contacts.length-1; i++) {
    if (contacts[i]["firstName"] === name && contacts[i].hasOwnProperty(property) && contacts[i].hasOwnProperty(property)) {
      result = contacts[i][property];
      return result;
    } else if (contacts[i]["firstName"] !== name) {
      result = "No such contact";
    } else if (contacts[i].hasOwnProperty(property) === false) {
      result = "No such property";
      return result;
    }
  }
  return result
}

console.log(lookUpProfile("Akira", "address"));
