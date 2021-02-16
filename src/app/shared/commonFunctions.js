const letters = "abcdefghijklmnopqrstuvwxyz";

export function randomLetter() {
  return letters[Math.floor(Math.random() * letters.length)];
}

export function loremIpsum(length = 20, spaceChange = 0.2) {
  let returnString = "";
  for (let i = 0; i < length; i++) {
    const chance = Math.random();

    if (chance > 0.9 && returnString[returnString.length - 1] !== " ") {
      returnString += ". ";
    } else {
      returnString += randomLetter();
    }
    if (chance > 0.1) {
      returnString += randomLetter();
    } else {
      returnString += " ";
    }
    Math.random() < spaceChange && returnString[returnString.length - 1] !== " "
      ? (returnString += " ")
      : (returnString += randomLetter());
  }
  return returnString;
}
