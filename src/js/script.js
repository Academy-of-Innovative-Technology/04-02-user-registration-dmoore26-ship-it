let form = document.querySelector("#registrationForm");

form.addEventListener("submit", function (e) {

  e.preventDefault(); // stop page refresh

  let first = document.querySelector("#firstName").value;
  let last = document.querySelector("#lastName").value;
  let EEmail = document.querySelector("#email").value;
  let PPassword = document.querySelector("#password").value;
  let countryYY = document.querySelector("#country").value;
  let aboutG = document.querySelector("#about").value;
  
  let acc = "";
  let radio = document.querySelector('input[name="accountType"]:checked');
  if (radio) {
    acc = radio.value;
  }

  let user = {
    firstName: first,
    lastName: last,
    email: EEmail,
    password: PPassword,
    country: countryYY,
    accountType: acc,
    about: aboutG
  };

 
  localStorage.setItem("registeredUser", JSON.stringify(user));

 
  displayUser(user);

  alert("Saved!");
});


function displayUser(user) {

  document.querySelector("#savedFirstName").textContent = user.firstName;
  document.querySelector("#savedLastName").textContent = user.lastName;
  document.querySelector("#savedEmail").textContent = user.email;
  document.querySelector("#savedCountry").textContent = user.country;
  document.querySelector("#savedAccountType").textContent = user.accountType;
  document.querySelector("#savedAbout").textContent = user.about;

  document.querySelector("#savedUserPanel").classList.remove("d-none");
  document.querySelector("#noSavedUser").classList.add("d-none");
}


document.addEventListener("DOMContentLoaded", function () {

  let data = localStorage.getItem("registeredUser");

  if (data) {
    let user = JSON.parse(data);
    displayUser(user);
  } else {
    document.querySelector("#savedUserPanel").classList.add("d-none");
    document.querySelector("#noSavedUser").classList.remove("d-none");
  }
});


document.querySelector("#UserBtn").addEventListener("click", function () {

  localStorage.removeItem("registeredUser");

  document.querySelector("#savedUserPanel").classList.add("d-none");
  document.querySelector("#noSavedUser").classList.remove("d-none");

});
