// assign the button info to the variable
var generateBtn = document.querySelector("#generate");
var specialChar = "!@#$%^&*(){}[]=<>/,.|~?";//sepcial variable declaration
var lowerCase = "abcdefghijklmnopqrstuvwxyz";//lowercase variable declaration
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//uppercase variable declaration
var number = "0123456789";//number variable declaration
var lower = true;//get the prompt result true or faLse 
var upper = true;
var num = true;
var char = true;
let passwordVal = "";//get the password 
var lenght = 0;//get the length of the password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (lenght === null) {
    passwordText.value = "";
  }
  else {
    alert("The password is: " + password);
    passwordText.value = password;
  }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//  function to get the random lowercase letter
function getLowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

//  function to get the random uppercase letter
function getUpperCase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

// function to get the special character
function getSpecialCharcter() {
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}

//function to get the random number
function getNumber() {
  return number[Math.floor(Math.random() * number.length)];
}

//function to  check the condition for the password genration
function generatePassword() {
  lenght = prompt("Enter the lenght of the password.");
  if (lenght === null) {
    alert("User cancelled");
  }
  else if (isNaN(lenght)) {//check the length is a number or not
    alert("The lenght should be a number.");
    generatePassword();
  }
  else if ((lenght < 8 || lenght > 128)) {//check the length is between 8 to 128
    alert("Password lenght should be range between 8 to 128.");
    generatePassword();
  }
  else {
    lenght = parseInt(lenght, 10);
    checkSpecialChar();

  }
  return passwordVal;
}

function checkSpecialChar() {
  lower = confirm("Do you want to include lowercase letter?");
  upper = confirm("Do you want to include uppercase letter?");
  num = confirm("Do you want to include number?");
  char = confirm("Do you want to include special character?");
  if (lower === false && upper === false && num === false && char === false) {

    alert("At least one character type should be selected");
    checkSpecialChar();
  }
  else {
    passwordVal = "";
    for (var i = 0; i < lenght; i++) {
      var x = generateX();//call the function to get the password genrated
      passwordVal += x;
    }

  }
}

//function to genrate the password 
function generateX() {
  var randPass = [];
  if (lower) {
    randPass.push(getLowerCase());
  }
  if (upper) {
    randPass.push(getUpperCase());
  }
  if (num) {
    randPass.push(getNumber());
  }
  if (char) {
    randPass.push(getSpecialCharcter());
  }
  return randPass[Math.floor(Math.random() * randPass.length)];
}
