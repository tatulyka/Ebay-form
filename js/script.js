  "use strict";

  function ValidateEmail() {
    let mailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/i;
    let email = document.getElementById('businessmail').value;
    let valid = mailFormat.test(email);
    if (valid) output = "The email is correct";
    else output = "Please enter your correct email";
    document.getElementById('errormessage2').innerHTML += output;
        return valid;
    }
  //let errors = [];
   // function ValidatePass(password) {
     // let pass = document.getElementById('password').value;
     // let passvalidity = pass;


      












//function check() {
 // let businessname = document.getElementById('businessname');
 // let email = document.getElementById('businessmail');
  //let password = document.getElementById('password');
 // document.getElementById('errormessage1').innerHTML = "";
 // document.getElementById('errormessage2').innerHTML = "";
 // document.getElementById('errormessage3').innerHTML = "";
 // document.getElementById('successmessage').innerHTML = "";


 // if (businessname.value =='') 
 // document.getElementById('errormessage1')
 // .innerHTML += "Please enter your business name.";
 // else if (email.value =='')
  //document.getElementById('errormessage2')
 // .innerHTML += "Please enter your email."
  //else if (password.value =='')
 // document.getElementById('errormessage3')
 // .innerHTML += "Please enter your password."
 //else if (password.value.length <= 8)
 // document.getElementById('errormessage3')
 // .innerHTML += "The password must contain at least 8 characters";
 // else document.getElementById('successmessage')
 // .innerHTML += "Your account is registered successfully";

//} 

