const abc = "abcdefghijklmnopqrstuvwxyz";

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
