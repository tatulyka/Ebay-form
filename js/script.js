  "use strict";

  function ValidateEmail() {
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    let email = document.getElementById('businessmail').value;
    let valid = mailFormat.test(email);
    const output = valid ? "The email is correct" : "Please enter your correct email";
    document.getElementById('errormessage2').innerHTML = output;
    return valid;
  }
  
  function ValidatePass() {
    let passFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    let pass = document.getElementById('password').value;
    let valid = passFormat.test(pass);
    const output2 = valid ? "The password is strong" : "password is not strong";
    document.getElementById('errormessage3').innerHTML = output2;
    return valid;

   }


      












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

