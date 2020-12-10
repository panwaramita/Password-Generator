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
var length = 0;//get the length of the password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();//store the password retun from the function
  var passwordText = document.querySelector("#password");
  if (length === null) {//if user canceled to genrate password
    passwordText.value = "";
  }
  else if(password==="")//if user does not select the special character
  {
    passwordText.value = "";
  }
  else {
    alert("The password is: " + password);
    passwordText.value = password;//assign the password to the textarea
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
  length = prompt("Enter the length of the password.");
  if (length === null) {//check if user canceled 
    alert("User cancelled.");
  }
  else if (isNaN(length)) {//check the length is a number or not
    alert("The length should be a number.");
    generatePassword();
  }
  else if ((length < 8 || length > 128)) {//check the length is between 8 to 128
    alert("Password length should be range between 8 to 128.");
    generatePassword();
  }
  else if(length%1!==0)//check of the length is a int number
  {
    alert("Enter the valid number.");
    generatePassword();
  }
  else {//if the length is valid 
    checkSpecialChar();

  }
  return passwordVal;//return the genrated password
}
//function to allow user to select the character 
function checkSpecialChar() {
  lower = confirm("Do you want to include lowercase character?");
  upper = confirm("Do you want to include uppercase character?");
  num = confirm("Do you want to include number?");
  char = confirm("Do you want to include special character?");
  if (lower === false && upper === false && num === false && char === false) {

    alert("At least one character type should be selected,");
    passwordVal = "";
  }
  else {
    passwordVal = "";
    for (var i = 0; i < length; i++) {
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
