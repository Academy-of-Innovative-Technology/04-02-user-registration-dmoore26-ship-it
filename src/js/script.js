
let form = document.querySelector("#registrationForm");

let savedFirstName = document.querySelector("#savedFirstName");
let savedLastName = document.querySelector("#savedLastName");
let savedEmail = document.querySelector("#savedEmail");
let savedCountry = document.querySelector("#savedCountry");
let savedAccountType = document.querySelector("#savedAccountType");
let savedAbout = document.querySelector("#savedAbout");

let savedUserPanel = document.querySelector("#savedUserPanel");
let noSavedUser = document.querySelector("#noSavedUser");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

 let firstName = document.querySelector("#firstName").value;
 let lastName = document.querySelector("#lastName").value;
 let email = document.querySelector("#email").value;
 let password = document.querySelector("#password").value;
 let country = document.querySelector("#country").value;

 let selectedRadio = document.querySelector('input[name="accountType"]:checked');
let accountType = selectedRadio ? selectedRadio.value : "";

  let about = document.querySelector("#about").value;

 let user = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    country: country,
    accountType: accountType,
    about: about
  };
  localStorage.setItem("registeredUser", JSON.stringify(user));

  displayUser(user);

  alert("Registration Saved!");
});

function loadUser() {
  letsavedData = localStorage.getItem("registeredUser");

  if (savedData) {
   let parsedUser = JSON.parse(savedData);
    displayUser(parsedUser);
  } else {
    savedUserPanel.classList.add("d-none");
    noSavedUser.classList.remove("d-none");
  }
}

function displayUser(user) {
  savedFirstName.textContent = user.firstName;
  savedLastName.textContent = user.lastName;
  savedEmail.textContent = user.email;
  savedCountry.textContent = user.country;
  savedAccountType.textContent = user.accountType;
  savedAbout.textContent = user.about;

  savedUserPanel.classList.remove("d-none");
  noSavedUser.classList.add("d-none");
}

document.querySelector("#clearUserBtn").addEventListener("click", function () {
  localStorage.removeItem("registeredUser");

  savedFirstName.textContent = "-";
  savedLastName.textContent = "-";
  savedEmail.textContent = "-";
  savedCountry.textContent = "-";
  savedAccountType.textContent = "-";
  savedAbout.textContent = "-";

  savedUserPanel.classList.add("d-none");
  noSavedUser.classList.remove("d-none");
});

document.addEventListener("DOMContentLoaded", loadUser);
