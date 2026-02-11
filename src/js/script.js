document.querySelector(".btn-primary").addEventListener("click", function (event) {
  event.preventDefault();


  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const country = document.querySelector("#country").value;


  const accountType = document.querySelector(
    'input[name="accountType"]:checked'
  ).value;


  const about = document.querySelector("#about").value;


  const user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    country: country,
    accountType: accountType,
    about: about
  };


  localStorage.setItem("savedUser", JSON.stringify(user));

  console.log("User saved:", user);
});


const savedString = localStorage.getItem("User");


if (savedString) {

  const User = JSON.parse(savedString);
  
 
  console.log(User.firstName); 
      
  console.log(User.lastName); 
  console.log(User.password); 
  console.log(User.country); 
  console.log(User.accountType); 
    console.log(User.about); 
  console.log(User.email);
} else {
  console.log("No saved user data found.");
}


