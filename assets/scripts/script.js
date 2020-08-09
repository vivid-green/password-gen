// Assignment Code
var generateBtn = document.querySelector("#generate");

const pwSpecial = "!@#$%^&*()_+=`~|]}[{;><?*";
const pwNumeric = "0123456789";
const pwLetters = 'abcdefghijklmnopqrstuvwxyz';

const pwCriteria = [pwSpecial, pwNumeric, pwLetters, pwLetters.toUpperCase()];

function generatePassword() {

  // prompt length of at least 8 characters and no more than 128 characters
  var pwLength = prompt("Please enter the character length for your password.");
  if (pwLength >= 8 && pwLength <= 128) {

    //prompt to enter password critera lowercase, uppercase, numeric and/or special characters.

    var userSpecial = confirm('Should password include special characters?');
    var userNumeric = confirm('Should password include numbers?');
    var userLowercase = confirm('Should password include lowercase letters?');
    var userUppercase = confirm('Should password include uppercase letters?');

    var userCritera = [userSpecial, userNumeric, userLowercase, userUppercase];
    var userValid = userCritera.includes(true);

    if (!userValid) {

      alert('At least one password criteria should be selected (lowercase letters, uppercase letters, numbers and/or special characters).');
      
    } else {

      var pwGenString = "";
      var pwString = "";

      for (i = 0; i < userCritera.length; i++) {

        if (userCritera[i]) {

          pwGenString = pwGenString + pwCriteria[i];
        }
      };

      for (i = 0; i < pwLength; i++) {

        var pwString = pwString + pwGenString.charAt(Math.floor(Math.random() * (pwGenString.length)));
      };
    }

  } else {

    alert('Your password must have a character length of at least 8 characters and no more than 128 characters.');
  }

  return pwString;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  if (password !== undefined) {

    document.getElementById('password').value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
