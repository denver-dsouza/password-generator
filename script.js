// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

    var button = document.getElementById("generate");
    button.addEventListener("click", getPasswordOptions);

    function getPasswordOptions() {
      var length = prompt("Enter the desired password length:");
      length = parseInt(length);
      if (isNaN(length) || length <= 0) {
        alert("Please enter a valid positive number for the password length.");
        return;}
      if (isNaN(length) || length >128 ) {
          alert("Please enter a valid positive number less than 128 characters for the password length.");
          return;
      }

      var includeUppercaseCharacters = confirm("Do you want the password to include Uppercase characters?");
      var includeLowercaseCharacters = confirm("Do you want the password to include lowercase characters?");
      var includeNumbersCharacters = confirm("Do you want the password to include numbers?");
      var includeSpecialCharacters = confirm("Do you want the password to include Special characters?");
      var charset = "";
      if (includeUppercaseCharacters) charset += upperCasedCharacters.join('');
      if (includeLowercaseCharacters) charset += lowerCasedCharacters.join('');
      if (includeNumbersCharacters) charset += numericCharacters.join('');
      if (includeSpecialCharacters) charset += specialCharacters.join('');

      if (charset === "") {
        alert("You must select at least one character type.");
        return;
      }

      writePassword(generatePassword(length, charset));
    }

    function generatePassword(length, charset) {
      var password = "";
      for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    }

    function writePassword(password) {
      var passwordText = document.querySelector('#password');
      passwordText.value = password;
    }