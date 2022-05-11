  "use strict";
  function validate() {
     
      let name = document.getElementById('businessname').value;
      let nameValidity = name.validity;
      const output1 = '';
      if (nameValidity.rangeOverflow) 
		{ let max = name.max;
			output1 = 'title length cannot be longer';
      document.getElementById('errormessage1').innerHTML = output1 + max; }
      
      if (nameValidity.rangeUnderflow) 
      { let min = name.min;
        output1 = 'title length cannot be shorter';
        document.getElementById('errormessage1').innerHTML = output1 + min; };
			

     


    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    let email = document.getElementById('businessmail').value;
    let valid = mailFormat.test(email);
    const output = valid ? "The email is correct" : "Please enter your correct email";
    document.getElementById('errormessage2').innerHTML = output;
    
    let passFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    let pass = document.getElementById('password').value;
    let valid1 = passFormat.test(pass);
    const output2 = valid1 ? "The password is strong" : "The password is not strong";
    document.getElementById('errormessage3').innerHTML = output2;





    
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

