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
  var pwLength = prompt("Choose pw length");
  pwLength = parseInt(pwLength);

  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert(
      "Password should be between 8 and 128 characters. Please regenerate answer."
    );
    return;
  }

  var isLowercase = confirm("Click OK if you want to include lowercase.");
  var isUppercase = confirm("Click OK if you want to include uppercase.");
  var isNumeric = confirm("Click OK if you want to include numbers.");
  var isSpecChar = confirm(
    "Click OK if you want to include special characters."
  );

  return {
    pwLength,
    lowerCaseValue: isLowercase,
    upperCaseValue: isUppercase,
    numericValue: isNumeric,
    specCharValue: isSpecChar,
  };
}

// Function for shuffling an array
function shuffleArray(arr) {
  return [...arr].sort(() => 0.5 - Math.random());
}

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var passOptions = getPasswordOptions();

  var isAnyCharacterSelected = false; //check any character type is selected

  var mainCharacterArray = [];
  // functionality to generate random characters from lowercase array
  if (passOptions.lowerCaseValue) {
    var randomLowerCase = shuffleArray(lowerCasedCharacters);
    mainCharacterArray.push(...randomLowerCase);
    isAnyCharacterSelected = true;
  }

  // functionality to generate random characters from uppercase array
  if (passOptions.upperCaseValue) {
    var randomUpperCase = shuffleArray(upperCasedCharacters);
    mainCharacterArray.push(...randomUpperCase);
    isAnyCharacterSelected = true;
  }

  //functionality to generate random characters from numeric array
  if (passOptions.numericValue) {
    var randomNumericValue = shuffleArray(numericCharacters);
    mainCharacterArray.push(...randomNumericValue);
    isAnyCharacterSelected = true;
  }

  // functionality to generate random special characters from array

  if (passOptions.specCharValue) {
    var randomSpecChar = shuffleArray(specialCharacters);
    mainCharacterArray.push(...randomSpecChar);
    isAnyCharacterSelected = true;
  }

  // Check if at least one character type is selected
  if (!isAnyCharacterSelected) {
    alert("At least one character type should be selected.");
    return;
  }

  // mainCharacterArray = shuffleArray(mainCharacterArray);

  var finalPassword = "";

  for (let i = 0; i < passOptions.pwLength; i++) {
    var randomChar = getRandom(mainCharacterArray);
    finalPassword += randomChar;
  }

  return finalPassword;
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
