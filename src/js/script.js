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

  
  localStorage.setItem("registeredUser", JSON.stringify(user));

  console.log("User saved:", user);

  displayUser(user);
});




  const savedString = localStorage.getItem("registeredUser");

  if (savedString) {

    const savedUser = JSON.parse(savedString);

    displayUser(savedUser);

  } else {
    console.log("No saved user data found.");
  }




function displayUser(user) {

  document.querySelector("#savedFirstName").textContent = user.firstName;
  document.querySelector("#savedLastName").textContent = user.lastName;
  document.querySelector("#savedEmail").textContent = user.email;
  document.querySelector("#savedCountry").textContent = user.country;
  document.querySelector("#savedAccountType").textContent = user.accountType;
  document.querySelector("#savedAbout").textContent = user.about;
}
