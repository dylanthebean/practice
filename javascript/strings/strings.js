// STRINGS.

// Get last character of a string. //
//
// let example = "Hello world";
// console.log(example.charAt(example.length - 1));

// Add strings together + spread operator //
//
// let example1 = "Hello World";
// let example2 = "Testing";
// let arrayStrings = [" Hello", " There"];
// console.log(example1.concat(example2, ...arrayStrings, " World"));

// Get if a string ends with something returns a boolean, //
// second parameter is offset value //
//
// let example = "Hello World";
// console.log(example.endsWith("W", 7));

// Get indexOf first matching character, //
// returns index if true, -1 if false
//
// let example = "Hello World";
// console.log(example.indexOf("H"));
// console.log(example.indexOf("Ha"));

// Return boolean value if string includes character //
//
// let example = "Hello world";
// console.log(example.includes("H"));
// console.log(example.includes("Z"));
// console.log(example.indexOf("H") === -1);
// console.log(example.indexOf("H") > -1);

// Matches string with evaluated regex and returns array of those stringed values //
//
// let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijk";
// let regex = /[A-E]/gi;
// console.log(str.match(regex));

// Replace string with other string initial or all //
//
// let example = "Hello World Hello";
// console.log(example.replace(/Hello/i, "Goodbye"));
// console.log(example.replace(/Hello/gi, "Goodbye"));

// Get index of first value of regex evaluation, -1 if doesn't exist //
//
// let example = "Hello World Hello";
// console.log(example.search(/World/i));
// console.log(example.search(/World2/i));

// Split string into an array based on seperator //
//
// let example = "Hello, There, World";
// console.log(example.split(","));

// Grab part of a string //
//
// let example = "Hello, There, World";
// console.log(example.substr(1, 5));
