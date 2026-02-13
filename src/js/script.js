document.querySelector(".btn-primary").addEventListener("click", function (event) {
  event.preventDefault();

  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const country = document.querySelector("#country").value;
  
  const selectedAccount = document.querySelector('input[name="accountType"]:checked');
  const accountType = selectedAccount ? selectedAccount.value : "";
  
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


  displayUser(user);


  alert("Registration Saved!");

  console.log("User saved:", user);
});

function displayUser(user) {
  document.querySelector("#savedFirstName").textContent = user.firstName;
  document.querySelector("#savedLastName").textContent = user.lastName;
  document.querySelector("#savedEmail").textContent = user.email;
  document.querySelector("#savedCountry").textContent = user.country;
  document.querySelector("#savedAccountType").textContent = user.accountType;
  document.querySelector("#savedAbout").textContent = user.about;


  document.querySelector("#savedSection").style.display = "block";
}

function loadUser() {
  const savedData = localStorage.getItem("savedUser");

  if (savedData) {
    const parsedUser = JSON.parse(savedData);
    displayUser(parsedUser);
  }
}


document.addEventListener("DOMContentLoaded", loadUser);


document.querySelector("#clearUserBtn").addEventListener("click", function () {

  localStorage.removeItem("savedUser");


  document.querySelector("#savedFirstName").textContent = "";
  document.querySelector("#savedLastName").textContent = "";
  document.querySelector("#savedEmail").textContent = "";
  document.querySelector("#savedCountry").textContent = "";
  document.querySelector("#savedAccountType").textContent = "";
  document.querySelector("#savedAbout").textContent = "";


  document.querySelector("#savedSection").style.display = "none";

  console.log("User data cleared");
});
