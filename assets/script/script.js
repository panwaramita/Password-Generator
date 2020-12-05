// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var specialchar = "!@#$%^&*(){}[]=<>/,.|~?";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var lower = true;
var upper = true;
var num = true;
var char = true;
let password = "";
function getlowercase() {
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getuppercase() {
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getspecialcharcter() {
  return specialchar[Math.floor(Math.random() * specialchar.length)];
}

function getnumber() {
  return number[Math.floor(Math.random() * number.length)];
}

function generatePassword() {
  var lenght = prompt("Enter the length of the password.");
  if (isNaN(lenght)) {
    alert("The lenght should be a number.");
    writePassword();
  }
  else if (lenght < 8 || lenght > 128) {
    alert("Password lenght should be range between 8 to 128.");
    writePassword();
  }
  else {
    lower = confirm("Do you want to include lowercase letter?");
    upper = confirm("Do you want to include uppercase letter?");
    num = confirm("Do you want to include number?");
    char = confirm("Do you want to include special character?");
    console.log(lower);
    console.log(upper);
    console.log(num);
    console.log(char);
    if (lower === false && upper === false && num === false && char === false) {
      
      alert("At least one character type should be selected");
    }
    else {
      password = "";
      for (var i = 0; i < lenght; i++) {
        var x = generateX();
        password += x;
      }
      alert("The password is: " + password);
      return password;
    }
  }
}

function generateX() {
  var xs = [];
  if (lower) {
    xs.push(getlowercase());
  }
  if (upper) {
    xs.push(getuppercase());
  }
  if (num) {
    xs.push(getnumber());
  }
  if (char) {
    xs.push(getspecialcharcter());
  }
  return xs[Math.floor(Math.random() * xs.length)];
}
