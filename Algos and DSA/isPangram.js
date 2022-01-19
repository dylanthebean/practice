const abc = "abcdefghijklmnopqrstuvwxyz";

// Method 1

const isPangram = (string) => {
  const newString = string.trim().split(" ").join("").toLowerCase();

  let count = 0;

  for (let i = 0; i < newString.length; i++) {
    if (newString.includes(abc[i])) {
      count++;
    }
  }

  if (count >= 26) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isPangram("The quick Brown fox jumps over the lazy DOG");
isPangram("abcdefghijklmnopqrstuvwxyz");
isPangram("abcdefgnopqvwxyzzzzzzzzzzzzzzzzzz");

// Method 2

const isPangram2 = (string) => {
  const processedString = [...new Set(string.toLowerCase().split(" ").join(""))]
    .sort()
    .join("");

  return console.log(abc === processedString);
};

isPangram2("The quick Brown fox jumps over the lazy DOG");
isPangram2("abcdefghijklmnopqrstuvwxyz");
isPangram2("abcdefgnopqvwxyzzzzzzzzzzzzzzzzzz");

// Method 3

const isPangram3 = (string) => {
  const regexMatch = new Set(string.toLowerCase().match(/[a-z]/gi));
  return console.log(regexMatch.size === 26);
};

isPangram3("The quick Brown fox jumps over the lazy DOG");
isPangram3("abcdefghijklmnopqrstuvwxyz");
isPangram3("abcdefgnopqvwxyzzzzzzzzzzzzzzzzzz");
