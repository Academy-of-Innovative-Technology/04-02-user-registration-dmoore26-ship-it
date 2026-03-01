
const form = document.querySelector("#registrationForm");

const savedFirstName = document.querySelector("#savedFirstName");
const savedLastName = document.querySelector("#savedLastName");
const savedEmail = document.querySelector("#savedEmail");
const savedCountry = document.querySelector("#savedCountry");
const savedAccountType = document.querySelector("#savedAccountType");
const savedAbout = document.querySelector("#savedAbout");

const savedUserPanel = document.querySelector("#savedUserPanel");
const noSavedUser = document.querySelector("#noSavedUser");

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const country = document.querySelector("#country").value;

  const selectedRadio = document.querySelector('input[name="accountType"]:checked');
  const accountType = selectedRadio ? selectedRadio.value : "";

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

  displayUser(user);

  alert("Registration Saved!");
});
function loadUser() {
  const savedData = localStorage.getItem("registeredUser");

  if (savedData) {
    const parsedUser = JSON.parse(savedData);
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

// Load on page start
document.addEventListener("DOMContentLoaded", loadUser);
