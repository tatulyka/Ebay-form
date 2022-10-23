  "use strict";
  let button = document.querySelector('.create');
  let businessname = document.getElementById('businessname');
  let email = document.getElementById('businessmail');
  let pass = document.getElementById('password');
  button.addEventListener('click', validate)
  let errors = [];
  function validate() {
     
      let nameValidity = businessname.validity;
     let min = businessname.value.length;
     const output1 = min < 4 ? "title length cannot be shorter than 4": "Is OK";
     document.getElementById('errormessage1').innerHTML = output1; 		
    
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    let valid = mailFormat.test(email.value);
    const output = valid ? "The email is correct" : "Please enter your correct email";
    document.getElementById('errormessage2').innerHTML = output;
    
    let passFormat = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    let valid1 = passFormat.test(pass.value);
    const output2 = valid1 ? "The password is strong" : "The password is not strong";
    document.getElementById('errormessage3').innerHTML = output2;

 
   };
button.addEventListener("click", postForm);


   
   function postForm(event) {
    event.preventDefault();
    let location = document.querySelector(".location")
   // if (output1.length == '' && output.length == '') {
     //   document.querySelector('#errormessage4').innerHTML = "";
        let account = {
            businessname: businessname.value,
            email: email.value,
            password: pass.value,
            country: location.value,
             }
        fetch("https://httpbin.org/post", {
                method: 'POST',
                body: JSON.stringify(account), 
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            })
            .then(response => response.json())
            .then(account => {
                console.log(account);
            })
            .catch(error => console.log(error));
    } 
    //else {
      //  document.querySelector('#errormessage4').innerHTML = "Your account wasn't created";
    //}
//}


      












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

