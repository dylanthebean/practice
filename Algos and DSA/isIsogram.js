const isIsogram = (string) => {
  const newString = string.toLowerCase();
  const seen = [];
  let iso = true;

  for (let i = 0; i < string.length; i++) {
    if (!seen.includes(newString[i])) {
      seen.push(newString[i]);
    } else {
      iso = false;
    }
  }

  return iso;
};

console.log(isIsogram("ambidExtrously")); // true
console.log(isIsogram("patteRN")); // false
