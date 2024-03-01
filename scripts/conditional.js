// 1 :

const objOne = {
  id: 1,
  name: "ryan",
};

const objTwo = {
  address: "123 Fake St",
  phone: "555-555-5555",
};

const mergedObj = { ...objOne, ...objTwo };

console.log("Challenge 1 Answer");
console.log(mergedObj);

// 2 :

function largestNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const largest = (num1, num2) => (num1 > num2 ? num1 : num2);

console.log("Challenge 2 Answer");
console.log(largestNum(9, 12));
console.log(largest(9, 12));

// 3 :

function titleCase(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  return words.join(" ");
}

console.log("Challenge 3 Answer");
console.log(titleCase("i am a sentence"));

// 4 :

function alphabetize(str) {
  return str.toLowerCase().split("").sort().join("");
}

function alphabetizeCapitalized(str) {
  return str.split("").sort().join("").toUpperCase();
}

console.log("Challenge 4 Answer");
console.log(alphabetize("Hi there"));
console.log(alphabetizeCapitalized("Hi there"));
