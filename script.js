// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var lowercase = confirm("Click OK if you want to include lowercase.");
  var uppercase = confirm("Click OK if you want to include uppercase.");
  var numeric = confirm("Click OK if you want to include numbers.");
  var specChar = confirm("Click OK if you want to include special characters.");

  return {
    lowerCaseValue: lowercase,
    upperCaseValue: uppercase,
    numericValue: numeric,
    specCharValue: specChar,
  };
}

// Function for getting a random element from an array
function getRandom(arr, num) {
  var shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

// Function to generate password with user input
function generatePassword() {
  var passOptions = getPasswordOptions();
  console.log(passOptions);

  var password = [];
  // functionality to generate 8 random characters from lowercase array
  if (passOptions.lowerCaseValue) {
    var randomLowerCase = getRandom(lowerCasedCharacters, 8);
    password.push(...randomLowerCase);
  }

  // functionality to generate 8 random characters from uppercase array
  if (passOptions.upperCaseValue) {
    var randomUpperCase = getRandom(upperCasedCharacters, 8);
    password.push(...randomUpperCase);
  }

  //functionality to generate 8 random characters from numeric array
  if (passOptions.numericValue) {
    var randomNumericValue = getRandom(numericCharacters, 8);
    password.push(...randomNumericValue);
  }

  console.log(" Password", password);

  // var specialCharactersRandom = getRandom(specialCharacters);
  // var numericCharactersRandom = getRandom(numericCharacters);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
