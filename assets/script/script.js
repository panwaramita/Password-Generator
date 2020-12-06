// assign the button info to the variable
var generateBtn = document.querySelector("#generate");
var specialchar = "!@#$%^&*(){}[]=<>/,.|~?";//sepcial variable declaration
var lowercase = "abcdefghijklmnopqrstuvwxyz";//lowercase variable declaration
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";//uppercase variable declaration
var number = "0123456789";//number variable declaration
var lower = true;//get the prompt result true or faLse 
var upper = true;
var num = true;
var char = true;
let passwordval = "";//get the password 
var lenght = 0;//get the length of the password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  alert("The password is: " + password);
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//  function to get the random lowercase letter
function getlowercase() {
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

//  function to get the random uppercase letter
function getuppercase() {
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

// function to get the special character
function getspecialcharcter() {
  return specialchar[Math.floor(Math.random() * specialchar.length)];
}

//function to get the random number
function getnumber() {
  return number[Math.floor(Math.random() * number.length)];
}

//function to  check the condition for the password genration
function generatePassword() {
  lenght = prompt("Enter the length of the password.");
  if (isNaN(lenght)) {//check the length is a number or not
    alert("The lenght should be a number.");
    generatePassword();
  }
  else if (lenght < 8 || lenght > 128) {//check the length is between 8 to 128
    alert("Password lenght should be range between 8 to 128.");
    generatePassword();
  }
  else {
    checkspecialchar();
    console.log(passwordval);

  }
  return passwordval;
}

function checkspecialchar() {
  lower = confirm("Do you want to include lowercase letter?");
  upper = confirm("Do you want to include uppercase letter?");
  num = confirm("Do you want to include number?");
  char = confirm("Do you want to include special character?");
  if (lower === false && upper === false && num === false && char === false) {

    alert("At least one character type should be selected");
    checkspecialchar();
  }
  else {
    passwordval = "";
    for (var i = 0; i < lenght; i++) {
      var x = generateX();//call the function to get the password genrated
      passwordval += x;
    }

  }
}

//function to genrate the password 
function generateX() {
  var rand_pass = [];
  if (lower) {
    rand_pass.push(getlowercase());
  }
  if (upper) {
    rand_pass.push(getuppercase());
  }
  if (num) {
    rand_pass.push(getnumber());
  }
  if (char) {
    rand_pass.push(getspecialcharcter());
  }
  return rand_pass[Math.floor(Math.random() * rand_pass.length)];
}
